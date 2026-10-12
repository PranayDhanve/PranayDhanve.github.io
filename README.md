# Pranay Dhanve - Cybersecurity Portfolio

A responsive, dark professional portfolio built with React + Vite. It is designed to showcase security operations, information security experience, projects, skills, and certification.

## 1. Before publishing

Edit `src/main.jsx` and replace:
- `YOUR_EMAIL@example.com`
- `https://github.com/YOUR_USERNAME`
- `https://www.linkedin.com/in/YOUR_PROFILE/`

Add your latest resume PDF at `public/resume.pdf`. If you do not add it, remove the resume download button from the hero section.

Review all skills and project descriptions. For each project, add a public GitHub repository or a sanitized report only when you have actual evidence to share. Do not publish employer-confidential data, real user information, credentials, or internal security reports.

## 2. Run locally

Install Node.js LTS from https://nodejs.org/

In this folder, run:

```bash
npm install
npm run dev
```

Open the local URL shown by Vite in your terminal.

## 3. Build and test

```bash
npm run build
npm run preview
```

Vite creates the production website in `dist/`.

## 4. Free hosting with Vercel

1. Create a GitHub account if you do not have one: https://github.com/
2. Create a new repository, for example `cybersecurity-portfolio`.
3. Upload the contents of this folder to the repository (not the ZIP file itself).
4. Open https://vercel.com/ and sign in with GitHub.
5. Select **Add New → Project**, import your repository, and deploy.
6. Keep the detected Vite settings: build command `npm run build`, output directory `dist`.
7. Vercel gives you a public `*.vercel.app` URL.

The free Hobby plan is intended for personal/non-commercial use; check Vercel's current terms for your use case. You do not need to purchase a domain to use the provided Vercel URL.

## 5. Alternative: GitHub Pages

GitHub Pages is also suitable for static sites, but Vite needs a base path configured if you deploy to a repository URL such as `username.github.io/repository/`. For the simplest setup, use Vercel as described above.

## Notes

- This portfolio is a frontend-only static website. It does not require a database, backend, or paid API.
- Google Fonts are loaded from an external provider; if unavailable, the page falls back to system sans-serif fonts.
- No analytics, tracking scripts, or contact-form backend are included.


## GitHub Pages deployment (included)

This project includes a GitHub Actions workflow for GitHub Pages.

**Recommended setup**
1. Create a GitHub repository named exactly `YOUR_GITHUB_USERNAME.github.io` (replace with your actual GitHub username).
2. Upload the contents of this extracted project folder to the repository's `main` branch. Upload the files and folders themselves, not the ZIP.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions** as the source.
5. Open the **Actions** tab. The workflow named **Deploy portfolio to GitHub Pages** should run after the files are pushed. If needed, choose **Run workflow**.
6. When the deployment finishes successfully, visit `https://YOUR_GITHUB_USERNAME.github.io`.

The first deployment may take a few minutes. Replace the placeholder links and add `public/resume.pdf` before publishing. The `vite.config.js` base is set for the recommended `username.github.io` repository. If you instead use a normal repository name such as `portfolio`, the base path must be changed to `/portfolio/` and the deployment workflow rebuilt.
