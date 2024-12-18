const Chance = require('chance');
const path = require('path');

const chance = new Chance();

class MessageGenerator {
  constructor() {
    this.commitTypes = ['feat', 'fix', 'refactor', 'docs', 'style', 'chore', 'test', 'perf'];
    this.scopes = ['component', 'api', 'utils', 'config', 'styles', 'hooks', 'service', 'handler'];
    
    // Context-aware messages based on file changes
    this.fileTypeMessages = {
      '.js': {
        feat: ['Add new component', 'Implement feature', 'Add utility function', 'Create new module'],
        fix: ['Fix bug in', 'Resolve issue with', 'Correct error in', 'Fix typo in'],
        refactor: ['Refactor', 'Improve code structure', 'Optimize', 'Clean up'],
        docs: ['Update documentation', 'Add comments', 'Improve code comments'],
        style: ['Format code', 'Fix indentation', 'Update styling'],
        test: ['Add tests for', 'Update test cases', 'Fix failing tests']
      },
      '.jsx': {
        feat: ['Add new React component', 'Implement component', 'Create new UI component'],
        fix: ['Fix component bug', 'Resolve rendering issue', 'Fix prop types'],
        refactor: ['Refactor component', 'Improve component structure', 'Optimize rendering'],
        style: ['Update component styles', 'Improve UI', 'Fix styling issues']
      },
      '.ts': {
        feat: ['Add TypeScript types', 'Implement typed function', 'Add type definitions'],
        fix: ['Fix type errors', 'Correct type definitions', 'Resolve type issues'],
        refactor: ['Improve type safety', 'Refactor types', 'Update type definitions']
      },
      '.html': {
        feat: ['Add new page', 'Create HTML template', 'Add new section'],
        fix: ['Fix HTML structure', 'Correct markup', 'Fix accessibility issues'],
        style: ['Update HTML structure', 'Improve semantic markup']
      },
      '.css': {
        feat: ['Add new styles', 'Implement styling', 'Create new theme'],
        fix: ['Fix styling bug', 'Resolve CSS issue', 'Fix layout problem'],
        refactor: ['Refactor styles', 'Improve CSS structure', 'Optimize stylesheet'],
        style: ['Update styles', 'Improve design', 'Fix visual issues']
      },
      '.py': {
        feat: ['Add new function', 'Implement feature', 'Create new module'],
        fix: ['Fix bug', 'Resolve error', 'Correct logic'],
        refactor: ['Refactor code', 'Improve structure', 'Optimize performance'],
        docs: ['Update docstrings', 'Add documentation']
      },
      '.json': {
        feat: ['Add configuration', 'Update config', 'Add new settings'],
        fix: ['Fix configuration', 'Correct config values', 'Resolve config issue'],
        chore: ['Update dependencies', 'Update config', 'Maintain config']
      },
      '.md': {
        docs: ['Update documentation', 'Add documentation', 'Improve README', 'Update docs'],
        feat: ['Add new section', 'Create documentation page']
      }
    };

    // Casual messages (5-10% of commits)
    this.casualMessages = [
      'quick fix',
      'wip',
      'updates',
      'small changes',
      'tweaks',
      'minor update',
      'fix stuff',
      'cleanup',
      'more changes',
      'updating',
      'fixing things',
      'small refactor',
      'updates and fixes'
    ];
  }

  generate(filePath, changeType = 'modify') {
    // 8% chance for casual message
    if (chance.bool({ likelihood: 8 })) {
      return chance.pickone(this.casualMessages);
    }

    const extension = path.extname(filePath);
    const fileName = path.basename(filePath, extension);
    const fileTypeMessages = this.fileTypeMessages[extension] || this.fileTypeMessages['.js'];

    // Determine commit type based on context
    let commitType = chance.pickone(this.commitTypes);
    
    // Adjust type based on change type
    if (changeType === 'create') {
      commitType = chance.weighted(['feat', 'chore', 'docs'], [70, 20, 10]);
    } else if (changeType === 'modify') {
      commitType = chance.weighted(['fix', 'refactor', 'feat', 'style', 'docs'], [30, 25, 20, 15, 10]);
    }

    // Get message templates for this file type and commit type
    const templates = fileTypeMessages[commitType] || fileTypeMessages['feat'] || ['Update'];

    // Generate message
    let message = chance.pickone(templates);
    
    // Add file name context (70% of the time)
    if (chance.bool({ likelihood: 70 })) {
      const fileNameFormatted = this.formatFileName(fileName);
      message = `${message} ${fileNameFormatted}`;
    }

    // Add scope (40% of the time)
    if (chance.bool({ likelihood: 40 })) {
      const scope = chance.pickone(this.scopes);
      return `${commitType}(${scope}): ${message}`;
    }

    // Add description (30% of the time)
    if (chance.bool({ likelihood: 30 })) {
      const descriptions = [
        'improve performance',
        'add error handling',
        'update logic',
        'enhance functionality',
        'optimize code',
        'add validation',
        'improve UX',
        'fix edge cases'
      ];
      message = `${message} - ${chance.pickone(descriptions)}`;
    }

    return `${commitType}: ${message}`;
  }

  formatFileName(fileName) {
    // Convert kebab-case or snake_case to readable format
    return fileName
      .replace(/[-_]/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  // Generate branch-like commit patterns (for feature work)
  generateFeatureCommit(filePath, commitNumber) {
    const featureMessages = [
      'initial implementation',
      'add core functionality',
      'implement main feature',
      'add tests',
      'update documentation',
      'fix bugs',
      'refactor code',
      'optimize performance',
      'add error handling',
      'finalize feature'
    ];

    const message = featureMessages[commitNumber % featureMessages.length] || 'updates';
    const extension = path.extname(filePath);
    const fileName = path.basename(filePath, extension);
    
    return `feat: ${this.formatFileName(fileName)} - ${message}`;
  }
}

module.exports = MessageGenerator;


