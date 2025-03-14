#!/bin/bash

# Usage: ./setup-remote.sh your-github-username repo-name
if [ $# -ne 2 ]; then
    echo "Usage: ./setup-remote.sh your-github-username repo-name"
    exit 1
fi

USERNAME=$1
REPO_NAME=$2

echo "Setting up remote repository for $USERNAME/$REPO_NAME"

# Add remote
git remote add origin https://github.com/$USERNAME/$REPO_NAME.git

# Push to remote
git push -u origin main

echo "Remote repository setup complete!"
echo "Next steps:"
echo "1. Go to https://github.com/$USERNAME/$REPO_NAME/settings/pages"
echo "2. Set source to 'main' branch"
echo "3. Save to enable GitHub Pages"
echo "4. Your site will be available at https://$USERNAME.github.io/$REPO_NAME"
