const simpleGit = require('simple-git');
const fs = require('fs');
const path = require('path');
const moment = require('moment');
const CommitGenerator = require('./commit-generator');
const FileGenerator = require('./file-generator');
const MessageGenerator = require('./message-generator');
const config = require('./config');

class AutoCommitSystem {
  constructor(options = {}) {
    this.dryRun = options.dryRun || false;
    this.git = simpleGit(process.cwd());
    this.commitGenerator = new CommitGenerator();
    this.fileGenerator = new FileGenerator();
    this.messageGenerator = new MessageGenerator();
    this.stats = {
      total: 0,
      created: 0,
      skipped: 0,
      errors: 0
    };
  }

  async initialize() {
    console.log('🌱 Stealth GitHub Auto-Commit System');
    console.log('=====================================\n');

    // Check if Git is installed
    try {
      await this.git.version();
    } catch (error) {
      console.error('❌ Git is not installed or not in PATH!');
      console.error('\n📥 Please install Git first:');
      console.error('   1. Download from: https://git-scm.com/download/win');
      console.error('   2. Or run: winget install Git.Git');
      console.error('   3. Restart your terminal after installation\n');
      console.error('   See SETUP.md for detailed instructions.\n');
      throw new Error('Git is not installed');
    }

    // Check if git repo exists
    const isRepo = await this.git.checkIsRepo();
    if (!isRepo) {
      console.log('⚠️  Not a git repository. Initializing...');
      if (!this.dryRun) {
        await this.git.init();
        console.log('✅ Git repository initialized\n');
      } else {
        console.log('✅ [DRY RUN] Would initialize git repository\n');
      }
    }

    // Initialize project structure
    console.log('📁 Initializing project structure...');
    if (!this.dryRun) {
      this.fileGenerator.initializeStructure();
    }
    console.log('✅ Project structure ready\n');

    // Check for existing commits
    try {
      const log = await this.git.log();
      if (log.total > 0) {
        console.log(`ℹ️  Found ${log.total} existing commits`);
        console.log('   New commits will be added to the repository\n');
      }
    } catch (error) {
      // No commits yet, that's fine
    }
  }

  async generateCommits() {
    console.log('📅 Generating commit schedule...');
    const schedule = this.commitGenerator.generateSchedule();
    console.log(`✅ Generated schedule for ${schedule.length} commits\n`);

    // Show statistics
    const stats = this.commitGenerator.getStatistics(schedule);
    this.printStatistics(stats);

    if (this.dryRun) {
      console.log('\n🔍 DRY RUN MODE - No commits will be made');
      console.log('   Preview of first 10 commits:');
      schedule.slice(0, 10).forEach((item, index) => {
        console.log(`   ${index + 1}. ${item.date.format('YYYY-MM-DD HH:mm:ss')}`);
      });
      console.log(`   ... and ${schedule.length - 10} more commits\n`);
      return;
    }

    console.log('\n🚀 Starting commit generation...\n');
    const total = schedule.length;
    let processed = 0;
    const startTime = Date.now();

    // Process commits in batches to avoid overwhelming the system
    const batchSize = 50;
    for (let i = 0; i < schedule.length; i += batchSize) {
      const batch = schedule.slice(i, i + batchSize);
      
      for (const item of batch) {
        try {
          await this.createCommit(item.date);
          processed++;
          this.stats.created++;

          // Progress update every 100 commits
          if (processed % 100 === 0) {
            const elapsed = (Date.now() - startTime) / 1000;
            const rate = processed / elapsed;
            const remaining = total - processed;
            const eta = remaining / rate;
            console.log(`   Progress: ${processed}/${total} (${((processed/total)*100).toFixed(1)}%) - ETA: ${Math.round(eta)}s`);
          }
        } catch (error) {
          this.stats.errors++;
          console.error(`   ❌ Error creating commit for ${item.date.format('YYYY-MM-DD HH:mm:ss')}: ${error.message}`);
        }
      }

      // Small delay between batches
      await this.sleep(100);
    }

    const elapsed = (Date.now() - startTime) / 1000;
    console.log(`\n✅ Completed! Created ${this.stats.created} commits in ${elapsed.toFixed(1)}s`);
    console.log(`   Errors: ${this.stats.errors}\n`);
  }

  async createCommit(date) {
    // Generate or modify a file
    const { filePath, content } = this.fileGenerator.getOrCreateFile();
    const fullPath = path.join(process.cwd(), filePath);

    // Ensure directory exists
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Write file
    fs.writeFileSync(fullPath, content, 'utf8');

    // Determine if this is a new file or modification
    const isNewFile = !this.fileGenerator.existingFiles.has(filePath) || 
                      this.fileGenerator.existingFiles.get(filePath) === 0;
    const changeType = isNewFile ? 'create' : 'modify';

    // Generate commit message
    const message = this.messageGenerator.generate(filePath, changeType);

    // Stage file
    await this.git.add(filePath);

    // Create commit with specific date
    const dateStr = date.format('YYYY-MM-DD HH:mm:ss');
    await this.git.commit(message, {
      '--date': dateStr,
      '--no-verify': true // Skip hooks for faster execution
    });
  }

  printStatistics(stats) {
    console.log('\n📊 Commit Statistics:');
    console.log(`   Total commits: ${stats.total}`);
    console.log('\n   By Year:');
    Object.keys(stats.byYear).sort().forEach(year => {
      console.log(`     ${year}: ${stats.byYear[year]} commits`);
    });
    console.log('\n   By Day of Week:');
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].forEach(day => {
      if (stats.byDayOfWeek[day]) {
        console.log(`     ${day}: ${stats.byDayOfWeek[day]} commits`);
      }
    });
    console.log('\n   Peak Hours:');
    const sortedHours = Object.entries(stats.byHour)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
    sortedHours.forEach(([hour, count]) => {
      console.log(`     ${hour}:00 - ${count} commits`);
    });
    console.log('');
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async run() {
    try {
      await this.initialize();
      await this.generateCommits();

      if (!this.dryRun) {
        console.log('💡 Next steps:');
        console.log('   1. Review your commits: git log --oneline');
        console.log('   2. Push to GitHub: git push origin main');
        console.log('   3. Check your contribution graph on GitHub!\n');
      }
    } catch (error) {
      console.error('\n❌ Fatal error:', error.message);
      console.error(error.stack);
      process.exit(1);
    }
  }
}

// Parse command line arguments
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run') || args.includes('-d');

// Run the system
const system = new AutoCommitSystem({ dryRun });
system.run();

