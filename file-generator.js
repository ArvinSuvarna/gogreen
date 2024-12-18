const fs = require('fs');
const path = require('path');
const Chance = require('chance');
const config = require('./config');

const chance = new Chance();

class FileGenerator {
  constructor() {
    this.existingFiles = new Map(); // Track files and their versions
    this.fileCounter = 0;
  }

  // Initialize project structure
  initializeStructure() {
    config.projectStructure.forEach(dir => {
      const dirPath = path.join(process.cwd(), dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  // Generate realistic code content based on file type
  generateFileContent(filePath, extension) {
    const fileName = path.basename(filePath, extension);
    
    switch (extension) {
      case '.js':
      case '.jsx':
        return this.generateJavaScript(fileName);
      case '.ts':
      case '.tsx':
        return this.generateTypeScript(fileName);
      case '.html':
        return this.generateHTML(fileName);
      case '.css':
        return this.generateCSS(fileName);
      case '.py':
        return this.generatePython(fileName);
      case '.json':
        return this.generateJSON(fileName);
      case '.md':
        return this.generateMarkdown(fileName);
      case '.yml':
      case '.yaml':
        return this.generateYAML(fileName);
      default:
        return this.generateGeneric(fileName);
    }
  }

  generateJavaScript(fileName) {
    const templates = [
      // React component
      `import React, { useState, useEffect } from 'react';

const ${this.toPascalCase(fileName)} = () => {
  const [${this.toCamelCase(fileName)}, set${this.toPascalCase(fileName)}] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/${this.toKebabCase(fileName)}');
        const data = await response.json();
        set${this.toPascalCase(fileName)}(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="${this.toKebabCase(fileName)}">
      <h2>${this.toTitleCase(fileName)}</h2>
      {${this.toCamelCase(fileName)} && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default ${this.toPascalCase(fileName)};`,

      // Utility function
      `/**
 * ${this.toTitleCase(fileName)} utility functions
 */

export const ${this.toCamelCase(fileName)} = (${chance.pickone(['data', 'input', 'params', 'config'])}) => {
  // Implementation
  return ${chance.pickone(['null', '{}', '[]', 'true', 'false'])};
};

export const ${this.toCamelCase(fileName)}Helper = (${chance.pickone(['value', 'item', 'obj'])}) => {
  // Helper function
  return ${chance.pickone(['value', 'item', 'obj'])}?.${chance.pickone(['toString', 'toLowerCase', 'trim'])};
};`,

      // API route
      `const express = require('express');
const router = express.Router();

router.get('/${this.toKebabCase(fileName)}', async (req, res) => {
  try {
    // Fetch data logic
    const data = await fetch${this.toPascalCase(fileName)}Data();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/${this.toKebabCase(fileName)}', async (req, res) => {
  try {
    const result = await create${this.toPascalCase(fileName)}(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;`
    ];

    return chance.pickone(templates);
  }

  generateTypeScript(fileName) {
    return `interface ${this.toPascalCase(fileName)}Props {
  ${chance.pickone(['id', 'name', 'title', 'data'])}: ${chance.pickone(['string', 'number', 'boolean'])};
  ${chance.pickone(['onClick', 'onChange', 'onSubmit'])}?: () => void;
}

export const ${this.toPascalCase(fileName)}: React.FC<${this.toPascalCase(fileName)}Props> = ({
  ${chance.pickone(['id', 'name', 'title', 'data'])}
}) => {
  return (
    <div>
      <h2>${this.toTitleCase(fileName)}</h2>
    </div>
  );
};`;
  }

  generateHTML(fileName) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${this.toTitleCase(fileName)}</title>
  <link rel="stylesheet" href="/styles/${this.toKebabCase(fileName)}.css">
</head>
<body>
  <header>
    <h1>${this.toTitleCase(fileName)}</h1>
  </header>
  <main>
    <section>
      <h2>Content</h2>
      <p>Welcome to ${this.toTitleCase(fileName)}</p>
    </section>
  </main>
  <script src="/scripts/${this.toKebabCase(fileName)}.js"></script>
</body>
</html>`;
  }

  generateCSS(fileName) {
    return `.${this.toKebabCase(fileName)} {
  ${chance.pickone(['display: flex', 'display: grid', 'display: block'])};
  ${chance.pickone(['padding: 1rem', 'margin: 1rem', 'padding: 2rem'])};
  ${chance.pickone(['background-color: #f5f5f5', 'background-color: #ffffff', 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)'])};
}

.${this.toKebabCase(fileName)} h2 {
  ${chance.pickone(['font-size: 1.5rem', 'font-size: 2rem'])};
  ${chance.pickone(['color: #333', 'color: #000', 'color: #fff'])};
  margin-bottom: 1rem;
}`;
  }

  generatePython(fileName) {
    const templates = [
      `def ${this.toSnakeCase(fileName)}(${chance.pickone(['data', 'input_data', 'params'])}):
    """
    ${this.toTitleCase(fileName)} function
    """
    ${chance.pickone(['result = []', 'result = {}', 'result = None'])}
    # Process ${chance.pickone(['data', 'input_data', 'params'])}
    return result`,

      `import ${chance.pickone(['json', 'os', 'sys', 'datetime'])}
from typing import ${chance.pickone(['List', 'Dict', 'Optional', 'Union'])}

class ${this.toPascalCase(fileName)}:
    def __init__(self, ${chance.pickone(['config', 'data', 'params'])}):
        self.${chance.pickone(['config', 'data', 'params'])} = ${chance.pickone(['config', 'data', 'params'])}
    
    def process(self):
        # Implementation
        pass`
    ];

    return chance.pickone(templates);
  }

  generateJSON(fileName) {
    const jsonTypes = [
      { [this.toCamelCase(fileName)]: chance.pickone(['value1', 'value2', 'value3']) },
      { 
        name: this.toKebabCase(fileName),
        version: `${chance.integer({ min: 1, max: 5 })}.${chance.integer({ min: 0, max: 9 })}.${chance.integer({ min: 0, max: 9 })}`,
        enabled: chance.bool()
      },
      {
        [this.toCamelCase(fileName)]: {
          id: chance.integer({ min: 1, max: 1000 }),
          name: this.toTitleCase(fileName),
          active: chance.bool()
        }
      }
    ];

    return JSON.stringify(chance.pickone(jsonTypes), null, 2);
  }

  generateMarkdown(fileName) {
    return `# ${this.toTitleCase(fileName)}

## Overview

${chance.sentence({ words: 10 })}

## Features

- ${chance.sentence({ words: 5 })}
- ${chance.sentence({ words: 5 })}
- ${chance.sentence({ words: 5 })}

## Usage

\`\`\`${chance.pickone(['javascript', 'python', 'bash'])}
// Example usage
\`\`\`

## License

MIT`;
  }

  generateYAML(fileName) {
    return `${this.toKebabCase(fileName)}:
  name: ${this.toTitleCase(fileName)}
  version: ${chance.integer({ min: 1, max: 5 })}.${chance.integer({ min: 0, max: 9 })}
  enabled: ${chance.bool()}
  config:
    ${chance.pickone(['host', 'port', 'timeout'])}: ${chance.integer({ min: 1, max: 10000 })}`;
  }

  generateGeneric(fileName) {
    return `// ${this.toTitleCase(fileName)}
// Generated file
// ${chance.sentence({ words: 5 })}`;
  }

  // Modify existing file (simulate edits)
  modifyFile(filePath, extension) {
    if (!this.existingFiles.has(filePath)) {
      return this.generateFileContent(filePath, extension);
    }

    const currentContent = fs.readFileSync(filePath, 'utf8');
    const version = this.existingFiles.get(filePath) || 0;
    
    // Simple modifications: add comments, change values, etc.
    const modifications = [
      () => currentContent + `\n// Updated: ${new Date().toISOString()}\n`,
      () => currentContent.replace(/\/\/.*$/gm, `// ${chance.sentence({ words: 3 })}\n`),
      () => currentContent + `\n\n// Additional feature\n`,
    ];

    this.existingFiles.set(filePath, version + 1);
    return chance.pickone(modifications)();
  }

  // Get or create a file
  getOrCreateFile() {
    const fileType = chance.pickone(['web', 'general']);
    const typeConfig = config.fileTypes[fileType];
    const extension = chance.pickone(typeConfig.extensions);
    const directory = chance.pickone(typeConfig.directories);
    
    const fileName = this.generateFileName(extension);
    const filePath = path.join(directory, fileName);

    // 60% chance to modify existing file, 40% to create new
    const shouldModify = this.existingFiles.has(filePath) && chance.bool({ likelihood: 60 });
    
    let content;
    if (shouldModify) {
      content = this.modifyFile(filePath, extension);
    } else {
      content = this.generateFileContent(filePath, extension);
      this.existingFiles.set(filePath, 0);
    }

    return { filePath, content };
  }

  generateFileName(extension) {
    const prefixes = [
      chance.word(),
      chance.pickone(['utils', 'helper', 'service', 'component', 'api', 'config', 'handler', 'manager']),
      chance.pickone(['index', 'main', 'app', 'core', 'base'])
    ];
    
    const name = chance.pickone(prefixes);
    return `${this.toKebabCase(name)}${extension}`;
  }

  // Helper methods for name conversion
  toPascalCase(str) {
    return str.split(/[-_\s]/).map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join('');
  }

  toCamelCase(str) {
    const pascal = this.toPascalCase(str);
    return pascal.charAt(0).toLowerCase() + pascal.slice(1);
  }

  toKebabCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }

  toSnakeCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
  }

  toTitleCase(str) {
    return str.split(/[-_\s]/).map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
  }
}

module.exports = FileGenerator;

