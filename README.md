# 🌱 Stealth GitHub Auto-Commit System

An advanced auto-commit tool that creates realistic GitHub contribution patterns over 4 years (2022-2025) with progressive activity increase, human-like behavior, and actual code files to avoid detection.

## ⚠️ Disclaimer

This tool is for educational purposes. Artificially inflating your GitHub activity may mislead potential employers. Use responsibly and consider focusing on genuine contributions instead.

## ✨ Features

### Realistic Activity Patterns
- **Progressive activity**: 2022 (low) → 2023 (medium) → 2024 (high) → 2025 (very high)
- **Human-like timing**: Commits spread throughout the day (9 AM - 11 PM), not all at midnight
- **Weekend behavior**: Lighter activity on weekends, occasional full weekends off
- **Natural gaps**: Random days off, vacation periods (1-2 weeks per year)
- **Work hours**: More commits during typical work hours (9 AM - 6 PM)

### Realistic Commit Messages
- Mix of conventional commit types: `feat:`, `fix:`, `refactor:`, `docs:`, `style:`, `chore:`
- Descriptive messages that match the file changes
- Occasional casual messages (5-10% of commits)
- Context-aware messages based on file types

### Actual Code Files
- **Web development files**: HTML, CSS, JavaScript, React components, API routes
- **General software**: Python scripts, config files, utilities, tests
- **Realistic content**: Not just empty files, but actual working code snippets
- **File evolution**: Files get modified over time, not just created once
- **Project structure**: Organized folders (src/, components/, utils/, etc.)

### Stealth Mechanisms
- **Variable commit frequency**: Some days 1-2 commits, others 5-10 (not uniform)
- **Time distribution**: Commits at different times, not batches
- **File modification patterns**: Files edited multiple times, not just created
- **Realistic file sizes**: Mix of small and medium files
- **Commit clustering**: Related commits on same day (feature work)

## 📋 Prerequisites

- Node.js (v14 or higher)
- Git installed and configured
- A Git repository (will be initialized if not present)

## 🚀 Installation

1. **Clone or download this repository**

```bash
cd stealth-github-autocommit
```

2. **Install dependencies**

```bash
npm install
```

## 💻 Usage

### Dry Run (Preview)

First, run in dry-run mode to preview what will be created:

```bash
npm run dry-run
# or
node main.js --dry-run
```

This will show you:
- Total number of commits that will be created
- Statistics by year, day of week, and hour
- Preview of first 10 commits
- No actual commits will be made

### Generate Commits

Once you're satisfied with the preview, run:

```bash
npm start
# or
node main.js
```

This will:
1. Initialize the git repository (if needed)
2. Create the project structure
3. Generate commits for the past 4 years (2022-2025)
4. Create and modify realistic code files
5. Make commits with proper timestamps

### Push to GitHub

After generation completes:

```bash
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

## 📊 Activity Distribution

The system creates commits with the following distribution:

- **2022**: ~15-25 commits/month (learning phase - 20% activity)
- **2023**: ~40-60 commits/month (growing - 40% activity)
- **2024**: ~80-120 commits/month (active - 70% activity)
- **2025**: ~120-180 commits/month (very active - 100% activity)

## 🎯 Human Behavior Simulation

- **Work days**: 70% of commits between 9 AM - 6 PM
- **Evening work**: 20% between 6 PM - 11 PM
- **Weekend activity**: 30% of weekday activity (with 40% chance of no commits)
- **Vacation**: 1-2 weeks per year with no commits
- **Sick days**: Random 1-2 day gaps monthly
- **Commit clustering**: 40% of commits in 2-3 day bursts (feature work)

## 📁 Project Structure

The tool creates a realistic project structure:

```
project/
├── src/
│   ├── components/    # React components
│   ├── utils/         # Utility functions
│   ├── api/           # API routes
│   ├── styles/        # CSS files
│   └── hooks/         # React hooks
├── public/            # Public assets
├── tests/             # Test files
├── docs/              # Documentation
├── config/            # Configuration files
└── scripts/           # Utility scripts
```

## ⚙️ Configuration

Edit `config.js` to customize:

- Activity levels per year
- Work hours distribution
- Weekend activity multiplier
- Vacation periods
- Commit frequency distribution
- File types and templates

## 🔒 Safety Features

- **Dry-run mode**: Preview commits before creating them
- **Resume capability**: Can be run multiple times (skips existing commits)
- **Validation**: Checks for git repository before proceeding
- **Progress tracking**: Shows progress and ETA during execution

## 📝 Commit Messages

The system generates realistic commit messages:

- `feat: Add new component UserProfile`
- `fix: Resolve issue with API endpoint`
- `refactor: Improve code structure in utils`
- `docs: Update documentation for API`
- `style: Fix styling issues in components`
- `chore: Update configuration files`

## 🛠️ Technical Details

### Dependencies

- **simple-git**: Git operations
- **moment**: Date manipulation
- **chance**: Random data generation

### How It Works

1. **Schedule Generation**: Creates a realistic schedule of commit dates and times
2. **File Generation**: Creates and modifies realistic code files
3. **Message Generation**: Generates context-aware commit messages
4. **Commit Creation**: Makes commits with backdated timestamps

## ⚠️ Important Notes

1. **Detection Risk**: While this tool uses advanced techniques to mimic human behavior, experienced recruiters may still detect patterns. Use at your own risk.

2. **Repository Size**: Generating 4 years of commits will create a large repository. Consider the implications before pushing.

3. **Git History**: All commits are made with proper timestamps, so they will appear in your contribution graph.

4. **Ethical Considerations**: Consider focusing on genuine contributions instead of artificial activity.

## 🤝 Contributing

This is a personal project, but suggestions and improvements are welcome!

## 📄 License

MIT License - feel free to use and modify as needed.

## 🙏 Credits

Inspired by projects like [goGreen](https://github.com/fenrir2608/goGreen), but with enhanced stealth features and realistic behavior patterns.

---

**Remember**: The best way to improve your GitHub profile is through genuine contributions and real projects! 🌟


