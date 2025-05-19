# Kai Summit Website Project

This repository contains the content and structure for the Kai Summit event website. The project is organized to allow easy content management and automation through GitHub and Wix integration.

## Project Structure

- `/content/` - Contains all the website content as structured JSON files
- `/assets/` - Image assets, logos, and other media files
- `/wix-config/` - Configuration files for Wix integration
- `/docs/` - Additional documentation

## GitHub & Wix Integration Setup

### 1. Connect Wix Studio to GitHub

1. In Wix Studio, click on the Code sidebar (curly braces icon)
2. Click "GitHub" then "Connect to GitHub"
3. Sign in to your GitHub account
4. Name your repository and click "Create"
5. Install the Velo app to authorize the connection

### 2. Set Up API Key for Automation

1. Go to the API Keys Manager in your Wix account
2. Generate a new API key with "Wix CLI - Git Integration" site permission
3. Copy the API key securely

### 3. Set Up GitHub Actions

1. Go to your GitHub repository
2. Navigate to Settings > Secrets
3. Add a new repository secret named `WIX_API_KEY` with your API key
4. The provided workflow files in `.github/workflows/` will handle the automation

### 4. Content Updates Workflow

1. Update content in the JSON files in `/content/`
2. Commit and push changes to GitHub
3. GitHub Actions will automatically update your Wix site

## Content Management

All website content is stored in structured JSON files in the `/content/` directory:

- `event-info.json` - Basic event details (date, location, tickets)
- `about.json` - Event description and concept
- `pillars.json` - The four pillars of the event
- `schedule.json` - Event timeline and speakers
- `benefits.json` - Benefits for participants
- `cta.json` - Call to action buttons and texts
- `partners.json` - Sponsors and institutional support

## Manual Updates

If you need to make changes directly in Wix:

1. Make the changes in the Wix Editor
2. Pull the latest changes to your local repository using the Wix CLI
3. Commit and push to GitHub to keep everything synchronized
