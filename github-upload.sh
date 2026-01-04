#!/bin/bash
# 🚀 GitHub Upload Script
# This script automates the process of uploading to GitHub

echo "════════════════════════════════════════════════════════════"
echo "🚀 Cafe Menu React - GitHub Upload Script"
echo "════════════════════════════════════════════════════════════"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "❌ Git not initialized. Run: git init"
    exit 1
fi

echo "✅ Git repository found"
echo ""

# Get GitHub username and token
read -p "Enter your GitHub username: " username
read -sp "Enter your GitHub token (input hidden): " token
echo ""

if [ -z "$username" ] || [ -z "$token" ]; then
    echo "❌ Username or token is empty. Exiting."
    exit 1
fi

echo ""
echo "✅ Credentials received"
echo ""

# Set git remote
echo "🔗 Setting up remote repository..."
git remote remove origin 2>/dev/null
git remote add origin "https://${username}:${token}@github.com/${username}/cafe-menu-react.git"
echo "✅ Remote repository configured"
echo ""

# Push to GitHub
echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "════════════════════════════════════════════════════════════"
    echo "✅ SUCCESS! Your project is now on GitHub"
    echo "════════════════════════════════════════════════════════════"
    echo ""
    echo "🌐 View your project at:"
    echo "   https://github.com/${username}/cafe-menu-react"
    echo ""
    echo "📚 Next steps:"
    echo "   1. Review your README on GitHub"
    echo "   2. Add to your portfolio/resume"
    echo "   3. Share the link with others"
    echo ""
else
    echo ""
    echo "❌ Push failed. Please check your credentials and try again."
    exit 1
fi
