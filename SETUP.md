# 🚀 Project Setup Guide

This guide will help you set up this WebAgency CRM project locally and create a Git repository for version control.

## 📋 Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **npm** or **pnpm** package manager (npm comes with Node.js)

To verify installations, run:
```bash
node --version
git --version
npm --version
```

## 🏗️ Local Setup

### Step 1: Navigate to Project Directory

Open your terminal/command prompt and navigate to the project folder:

```bash
cd path/to/webagency-crm
```

### Step 2: Install Dependencies

Install all required packages:

```bash
npm install
```

Or if you prefer pnpm:

```bash
pnpm install
```

This will install:
- React 18.3.1
- Vite 6.3.5
- Tailwind CSS 4.1.12
- Lucide React (icons)
- Motion (animations)
- And all other dependencies

### Step 3: Start Development Server

Run the development server:

```bash
npm run dev
```

Or with pnpm:

```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

### Step 4: Verify Everything Works

Open your browser and navigate to `http://localhost:5173`. You should see:
- ✅ Dashboard with metrics
- ✅ Sidebar navigation
- ✅ Client list with sample data
- ✅ Click on clients to see detailed profiles with brand guidelines

## 🗂️ Git Repository Setup

### Option 1: Create a New Local Repository

Initialize Git in your project:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: WebAgency CRM with client management and brand guidelines"
```

### Option 2: Push to GitHub

1. **Create a new repository on GitHub:**
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it (e.g., `webagency-crm`)
   - **Do NOT** initialize with README, .gitignore, or license
   - Click "Create repository"

2. **Link your local repository to GitHub:**

```bash
# Initialize git (if not done already)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: WebAgency CRM with client management and brand guidelines"

# Add GitHub remote (replace with your repository URL)
git remote add origin https://github.com/YOUR-USERNAME/webagency-crm.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Option 3: Push to GitLab/Bitbucket

The process is similar to GitHub:

**GitLab:**
```bash
git remote add origin https://gitlab.com/YOUR-USERNAME/webagency-crm.git
git branch -M main
git push -u origin main
```

**Bitbucket:**
```bash
git remote add origin https://bitbucket.org/YOUR-USERNAME/webagency-crm.git
git branch -M main
git push -u origin main
```

## 📂 What's Included in Version Control

The `.gitignore` file is configured to exclude:
- ✅ `node_modules/` - Dependencies (too large)
- ✅ `dist/` - Build output
- ✅ `.env` files - Environment variables
- ✅ Editor configs (`.vscode/`, `.idea/`)
- ✅ System files (`.DS_Store`)
- ✅ `guidelines/` - Figma Make specific files

All source code, components, and configuration files are tracked.

## 🔄 Basic Git Workflow

### Making Changes

```bash
# Check status
git status

# Add specific files
git add src/app/components/ClientList.tsx

# Or add all changes
git add .

# Commit with a descriptive message
git commit -m "Add new feature: client search functionality"

# Push to remote
git push
```

### Creating Feature Branches

```bash
# Create and switch to new branch
git checkout -b feature/client-filters

# Make your changes...
git add .
git commit -m "Add advanced client filtering"

# Push branch to remote
git push -u origin feature/client-filters

# Switch back to main
git checkout main

# Merge feature branch (after review)
git merge feature/client-filters
```

### Viewing History

```bash
# View commit history
git log

# View compact history
git log --oneline

# View changes
git diff
```

## 🌐 Deployment Branches Strategy

### Recommended Branch Structure

```
main (production-ready)
  └── develop (integration branch)
        ├── feature/client-export
        ├── feature/email-integration
        └── bugfix/client-search
```

### Setting Up Branches

```bash
# Create develop branch
git checkout -b develop
git push -u origin develop

# Create feature branch from develop
git checkout develop
git checkout -b feature/new-feature
```

## 🔐 Environment Variables (Optional)

If you need environment variables:

1. Create `.env` file in project root:
```bash
# .env
VITE_API_URL=http://localhost:3000
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

2. Access in code:
```tsx
const apiUrl = import.meta.env.VITE_API_URL;
```

3. Never commit `.env` files (already in `.gitignore`)

## 🏷️ Tagging Releases

Create version tags for releases:

```bash
# Create annotated tag
git tag -a v1.0.0 -m "Version 1.0.0: Initial release"

# Push tags to remote
git push --tags

# View all tags
git tag
```

## 🚨 Common Issues

### "Permission denied" when pushing to GitHub

**Solution:** Set up SSH keys or use Personal Access Token
- [GitHub SSH setup guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
- [GitHub PAT guide](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

### Port 5173 already in use

**Solution:** Kill the process or use a different port
```bash
# Use different port
npm run dev -- --port 3000
```

### Changes not showing up

**Solution:** Clear cache and restart
```bash
# Stop server (Ctrl+C)
# Delete cache
rm -rf node_modules/.vite

# Restart
npm run dev
```

## 📚 Next Steps

After setup:

1. ✅ Customize client data in `/src/app/components/ClientList.tsx`
2. ✅ Update brand colors in `/src/styles/theme.css`
3. ✅ Add your own logo to sidebar
4. ✅ Configure backend integration (see README.md)
5. ✅ Set up authentication
6. ✅ Deploy to production

## 🤝 Team Collaboration

### Cloning for Team Members

Share repository URL with team:

```bash
# Clone repository
git clone https://github.com/YOUR-USERNAME/webagency-crm.git

# Navigate into directory
cd webagency-crm

# Install dependencies
npm install

# Start development
npm run dev
```

### Pull Latest Changes

```bash
# Fetch and merge latest changes
git pull origin main

# Or fetch first, then merge
git fetch origin
git merge origin/main
```

## 📞 Support

For issues:
- Check `README.md` for detailed documentation
- Review error messages carefully
- Check Node.js and npm versions
- Ensure all dependencies are installed

---

**Happy coding! 🎉**
