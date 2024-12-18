# Setup Guide

## Prerequisites

### 1. Install Git

You need Git installed to use this tool. Download and install from:
- **Windows**: https://git-scm.com/download/win
- Or use: `winget install Git.Git` (if you have Windows Package Manager)

After installation, **restart your terminal/PowerShell** for the PATH to update.

### 2. Verify Git Installation

Open a new PowerShell/Command Prompt and run:
```bash
git --version
```

You should see something like: `git version 2.x.x`

### 3. Configure Git (if not already done)

```bash
git config --global user.name "Arvin Suvarna"
git config --global user.email "your-email@example.com"
```

## Usage Steps

### Step 1: Preview (Dry Run)

First, see what will be generated without making any commits:

```bash
npm run dry-run
```

This will show you:
- Total number of commits
- Statistics by year, day of week, and hour
- Preview of first 10 commits

### Step 2: Generate Commits

Once you're satisfied with the preview:

```bash
npm start
```

This will:
- Initialize git repository (if needed)
- Create project structure
- Generate commits for 2022-2025
- Create realistic code files
- Make commits with proper timestamps

**Note**: This process may take 10-30 minutes depending on the number of commits.

### Step 3: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (e.g., "my-projects" or "portfolio")
3. **DO NOT** initialize with README, .gitignore, or license

### Step 4: Connect and Push

```bash
git remote add origin https://github.com/ArvinSuvarna/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

When prompted for credentials:
- **Username**: ArvinSuvarna
- **Password**: Use a Personal Access Token (not your GitHub password)

### Step 5: Create Personal Access Token

GitHub requires a Personal Access Token instead of password:

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name it: "Auto-commit tool"
4. Select scopes: `repo` (full control of private repositories)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again)
7. Use this token as your password when pushing

## Important Notes

⚠️ **Security**: Never commit your password or tokens to the repository!

⚠️ **Repository Size**: Generating 4 years of commits creates a large repository. Consider the implications.

⚠️ **Detection Risk**: While this tool uses advanced techniques, experienced recruiters may still detect patterns.

## Troubleshooting

### "git is not recognized"
- Install Git from https://git-scm.com/download/win
- Restart your terminal after installation

### "Authentication failed"
- Use a Personal Access Token instead of password
- Make sure the token has `repo` scope

### "Repository already exists"
- Either delete the existing repository or use a different name
- Or work in a different directory

### Process takes too long
- This is normal for thousands of commits
- Be patient, it will complete
- You can see progress updates every 100 commits


