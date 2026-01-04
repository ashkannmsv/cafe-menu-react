# 🚀 GitHub Upload Script (PowerShell - Windows)
# This script automates the process of uploading to GitHub

Write-Host "════════════════════════════════════════════════════════════"
Write-Host "🚀 Cafe Menu React - GitHub Upload Script" -ForegroundColor Green
Write-Host "════════════════════════════════════════════════════════════"
Write-Host ""

# Check if git is initialized
if (-not (Test-Path .git)) {
    Write-Host "❌ Git not initialized. Run: git init" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Git repository found" -ForegroundColor Green
Write-Host ""

# Get GitHub username
$username = Read-Host "Enter your GitHub username"

# Get GitHub token
$token = Read-Host "Enter your GitHub token (will be hidden)" -AsSecureString
$tokenPlain = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToCoTaskMemUnicode($token))

if ([string]::IsNullOrEmpty($username) -or [string]::IsNullOrEmpty($tokenPlain)) {
    Write-Host "❌ Username or token is empty. Exiting." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✅ Credentials received" -ForegroundColor Green
Write-Host ""

# Set git remote
Write-Host "🔗 Setting up remote repository..." -ForegroundColor Yellow
git remote remove origin 2>$null
git remote add origin "https://${username}:${tokenPlain}@github.com/${username}/cafe-menu-react.git"
Write-Host "✅ Remote repository configured" -ForegroundColor Green
Write-Host ""

# Push to GitHub
Write-Host "📤 Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin master

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "════════════════════════════════════════════════════════════" -ForegroundColor Green
    Write-Host "✅ SUCCESS! Your project is now on GitHub" -ForegroundColor Green
    Write-Host "════════════════════════════════════════════════════════════" -ForegroundColor Green
    Write-Host ""
    Write-Host "🌐 View your project at:" -ForegroundColor Cyan
    Write-Host "   https://github.com/${username}/cafe-menu-react" -ForegroundColor White
    Write-Host ""
    Write-Host "📚 Next steps:" -ForegroundColor Cyan
    Write-Host "   1. Review your README on GitHub" -ForegroundColor White
    Write-Host "   2. Add to your portfolio/resume" -ForegroundColor White
    Write-Host "   3. Share the link with others" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ Push failed. Please check your credentials and try again." -ForegroundColor Red
    exit 1
}
