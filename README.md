# Northstar — Windows desktop study tracker

A black-and-white learning tracker with three separate sections:

- **Machine Learning Engineer:** learning modules, courses, books, topic-by-topic mastery and progress.
- **Applied Scientist:** mathematical ML, LLM internals, research and experiments.
- **DSA:** algorithm patterns, curated LeetCode questions, solved status and optional company-list importer.

No AI tutor, OpenAI key, account login, or server is included. All personal study progress is stored locally on each person's computer. Company-question snapshots come from a public community dataset and are **not** guaranteed to reflect current interviews.

## For friends: download the EXE

Go to this repository's **Releases** page and download either:

- `Northstar-Portable-1.0.0.exe` — run directly, no installation.
- `Northstar-Setup-1.0.0.exe` — Windows installer (desktop and Start menu shortcuts).

The first big company-wise question import uses the internet; the curated starter problems and local learning-tracker features work offline. Imported data is cached locally when the import completes. Each user has their own progress.

### Windows security warning

These builds are **unsigned**, so Windows SmartScreen may warn about an unknown publisher. A public GitHub repository is not a substitute for code signing or security vetting. Only download from a release you trust.

## Owner: publish your first version through GitHub Actions

1. This repository contains the Northstar app and a Windows installer workflow.
2. Unzip this package and open PowerShell in its folder.
3. If you have Git installed and signed into GitHub, run (replace `vishal36-pop`):

```powershell
git init
git add .
git commit -m "Initial Windows desktop build"
git branch -M main
git remote add origin https://github.com/vishal36-pop/tracker.git
git push -u origin main
```

4. GitHub automatically runs **Actions → Build and release Northstar for Windows** on the push. In the workflow run, download the `Northstar-Windows-EXE` artifact and extract it to obtain both EXE files.
5. To make the download permanent and easy to share, create a version release by pushing a tag:

```powershell
git tag v1.0.0
git push origin v1.0.0
```

6. Once the GitHub Actions run finishes, friends can download the EXE directly from your **Releases** page:

`https://github.com/vishal36-pop/tracker/releases/latest`

> In a new repository, GitHub may require you to enable Actions. This workflow requires a Windows runner and permission to create a release. Repository Settings → Actions → General may need Workflow permissions set to **Read and write permissions** for publishing releases.

## Local development (Windows)

Install [Node.js LTS](https://nodejs.org/) and run:

```powershell
npm install
npm start
```

To build locally on Windows:

```powershell
npm run dist
```

The `.exe` files will be in `dist/`.

## Progress and privacy

Export progress as JSON from **Settings** before switching from the HTML version to the installed Windows version; import the backup in the new app. Do not commit personal JSON backup files or private PDFs to the public repository. The old HTML and the new packaged app may store progress in different browser/Electron profiles, so progress does **not** automatically migrate.

Each user's data is stored locally in their application's profile. A portable exe is portable to **run**, but it does not automatically make study progress portable between PCs: use JSON backup/export for that.

The repository includes a generic folder instruction in the app rather than a user's Windows account path.