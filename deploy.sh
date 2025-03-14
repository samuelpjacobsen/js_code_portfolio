#!/bin/bash

# Simple GitHub Pages deployment script
echo "Deploying to GitHub Pages..."

# Create gh-pages branch if it doesn't exist
if ! git rev-parse --verify gh-pages >/dev/null 2>&1; then
  git checkout -b gh-pages
  git push -u origin gh-pages
  git checkout main
else
  # Make sure we're on the main branch
  git checkout main
fi

# Get the current commit message
COMMIT_MSG="Deploy to GitHub Pages: $(date)"

# Push to gh-pages branch
git checkout gh-pages
git merge main
git push origin gh-pages
git checkout main

echo "Deployment complete! Your site should be available at https://SamuelJacobsen.github.io/your-repo-name"
