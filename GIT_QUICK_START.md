# 🚀 Git Quick Start Guide

Quick reference for initializing and managing your WebAgency CRM repository.

## ⚡ Quick Setup (5 minutes)

### 1. Initialize Git Repository

```bash
cd /path/to/webagency-crm
git init
git add .
git commit -m "Initial commit: WebAgency CRM v1.0"
```

### 2. Create GitHub Repository

**Option A: Via GitHub Website**
1. Go to https://github.com/new
2. Name: `webagency-crm`
3. Keep it Private or Public
4. **DO NOT** add README, .gitignore, or license
5. Click "Create repository"

**Option B: Via GitHub CLI** (if installed)
```bash
gh repo create webagency-crm --private --source=. --remote=origin --push
```

### 3. Push to GitHub

```bash
git remote add origin https://github.com/YOUR-USERNAME/webagency-crm.git
git branch -M main
git push -u origin main
```

✅ Done! Your repository is now on GitHub.

## 🔑 Common Commands

### Daily Workflow

```bash
# Check status
git status

# Add files
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push

# Pull latest changes
git pull
```

### Branching

```bash
# Create new branch
git checkout -b feature/new-feature

# Switch branches
git checkout main

# List branches
git branch

# Delete branch
git branch -d feature/old-feature

# Push branch to remote
git push -u origin feature/new-feature
```

### Viewing History

```bash
# View commits
git log

# Compact view
git log --oneline

# See what changed
git diff

# See specific file changes
git diff src/app/App.tsx
```

### Undoing Changes

```bash
# Undo uncommitted changes to a file
git checkout -- src/app/App.tsx

# Undo all uncommitted changes
git reset --hard

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1
```

## 📋 Best Practices

### Commit Messages

✅ **Good:**
```bash
git commit -m "feat: add client export to CSV"
git commit -m "fix: correct date formatting in client detail"
git commit -m "docs: update README with deployment steps"
```

❌ **Bad:**
```bash
git commit -m "update"
git commit -m "fixes"
git commit -m "wip"
```

### When to Commit

- ✅ After completing a feature
- ✅ After fixing a bug
- ✅ Before switching to a new task
- ✅ Before leaving for the day
- ❌ In the middle of broken code
- ❌ With commented-out code

### What to Commit

✅ **DO commit:**
- Source code files
- Configuration files
- Documentation
- Package.json
- Public assets

❌ **DON'T commit:**
- `node_modules/`
- `.env` files
- Build output (`dist/`)
- IDE files
- OS files (`.DS_Store`)

*Already configured in `.gitignore`*

## 🌿 Branching Strategy

### Simple Project (Solo Developer)

```
main (production)
  └── feature branches
```

```bash
# Work directly on main
git checkout main
git add .
git commit -m "feat: add new feature"
git push
```

### Team Project

```
main (production)
  └── develop (integration)
        ├── feature/client-export
        ├── feature/email-integration
        └── bugfix/date-formatting
```

```bash
# Create feature from develop
git checkout develop
git pull
git checkout -b feature/client-export

# Work on feature...
git add .
git commit -m "feat: implement CSV export"
git push -u origin feature/client-export

# Create Pull Request on GitHub
# After approval, merge to develop
```

## 🏷️ Version Tags

Create version tags for releases:

```bash
# Create tag
git tag -a v1.0.0 -m "Version 1.0.0: Initial release"

# Push tag
git push origin v1.0.0

# Push all tags
git push --tags

# List tags
git tag

# Delete tag locally
git tag -d v1.0.0

# Delete tag remotely
git push origin --delete v1.0.0
```

### Semantic Versioning

Format: `vMAJOR.MINOR.PATCH`

- **MAJOR:** Breaking changes (v2.0.0)
- **MINOR:** New features (v1.1.0)
- **PATCH:** Bug fixes (v1.0.1)

Examples:
- `v1.0.0` - Initial release
- `v1.1.0` - Added client export feature
- `v1.1.1` - Fixed export date bug
- `v2.0.0` - Redesigned entire UI (breaking)

## 🔄 Syncing with Remote

### Pull Latest Changes

```bash
# Fetch and merge
git pull origin main

# Or step by step
git fetch origin
git merge origin/main
```

### Resolve Conflicts

If you get conflicts:

```bash
# 1. Git will mark conflicts in files
# 2. Open conflicted files and resolve
# 3. Look for these markers:
#    <<<<<<< HEAD
#    Your changes
#    =======
#    Their changes
#    >>>>>>> origin/main

# 4. Edit file, remove markers, keep correct code
# 5. Mark as resolved
git add conflicted-file.tsx

# 6. Complete the merge
git commit -m "merge: resolve conflicts in client list"
```

## 🚨 Emergency Commands

### Accidentally Committed to Wrong Branch

```bash
# Copy commit hash
git log --oneline  # Get commit hash (e.g., abc123)

# Switch to correct branch
git checkout correct-branch

# Apply commit
git cherry-pick abc123

# Go back to wrong branch
git checkout wrong-branch

# Remove commit
git reset --hard HEAD~1
```

### Need to Change Last Commit Message

```bash
git commit --amend -m "New commit message"

# If already pushed
git push --force-with-lease
```

### Accidentally Added Sensitive Data

```bash
# Remove from last commit
git rm --cached .env
git commit --amend -m "Remove .env file"
git push --force-with-lease

# If in older commits, use git-filter-repo
# https://github.com/newren/git-filter-repo
```

## 🔐 SSH Setup (Recommended)

For easier pushing without passwords:

### 1. Generate SSH Key

```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
# Press Enter to accept defaults
```

### 2. Add to SSH Agent

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

### 3. Copy Public Key

```bash
# macOS
pbcopy < ~/.ssh/id_ed25519.pub

# Linux
cat ~/.ssh/id_ed25519.pub
# Copy the output
```

### 4. Add to GitHub

1. Go to GitHub → Settings → SSH and GPG keys
2. Click "New SSH key"
3. Paste your key
4. Click "Add SSH key"

### 5. Change Remote to SSH

```bash
git remote set-url origin git@github.com:YOUR-USERNAME/webagency-crm.git
```

## 📚 Learning Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Interactive Git Tutorial](https://learngitbranching.js.org/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

## 🆘 Help Commands

```bash
# Get help for any command
git help <command>
git help commit
git help push

# Quick reference
git <command> --help
git commit --help
```

## ✅ Checklist for First Push

- [ ] Project is in a clean state (`npm run dev` works)
- [ ] All dependencies installed
- [ ] `.gitignore` file present
- [ ] No sensitive data in code
- [ ] README.md is complete
- [ ] Git initialized (`git init`)
- [ ] All files added (`git add .`)
- [ ] Initial commit made
- [ ] GitHub repository created
- [ ] Remote added
- [ ] Pushed to GitHub
- [ ] Repository is accessible online

---

**Quick Links:**
- [Full Setup Guide](./SETUP.md)
- [Project Documentation](./README.md)
- [Project Summary](./PROJECT_SUMMARY.md)

**Need Help?** Check the [SETUP.md](./SETUP.md) file for detailed instructions.
