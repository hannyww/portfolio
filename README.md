# Personal Portfolio

A minimalist, high-craft personal portfolio built with Next.js 14, TypeScript, and Tailwind CSS.

## Architecture & Layout

- **Structure**: About, Work, and Contact sections with a floating pill navigation and rounded cards on a plain canvas background (`#FAFAFA`).
- **Typography with Character**: Styled using **Space Grotesk** (display headlines), **Plus Jakarta Sans** (body & UI), and **Outfit** (subtitles & accents). Zero usage of Inter, Manrope, Fraunces, or Instrument Serif.
- **Zero Em-Dashes**: Strict rule enforced across the codebase via automated script (`npm run check-em-dash`).

## Key Pages & Components

### 1. About Page (`/`)
- **Prominent Name**: Large typographic hero card with current location and availability status indicator.
- **One-Line Status**: Concise current interest statement with **previous roles bolded**.
- **Interactive Photo Gallery**: Clean photo cards with click-to-reveal captions and keyboard navigation (Esc to close).
- **In Rotation Card**: "Currently Listening" widget (with live audio equalizer simulation) + "Currently Reading" book card with progress and reflection quote.

### 2. Work Page (`/work`)
- **Selected Experiences**: List of real roles featuring title, company subtitle, time period, location, preview photo, and one-line summary.
- **Dedicated Subpages (`/work/[slug]`)**: In-depth subpages for each role detailing project overview, numbered key contributions, technology tags, and key takeaways.
- **Logo Wall**: Clean grid displaying partner organizations and past employers with crisp SVG fallbacks.

### 3. Contact Page (`/contact`)
- **iMessage Chat Prompt**: Apple Messages interface with timestamp, blue delivered bubbles, and quick reply prompt chips ("Collaborate on a project", "Looking for consulting", "Just saying hello").
- **Mail Compose Card**: macOS Mail window with traffic light buttons, To/From/Subject fields, message textarea, format toolbar, and draft copy / mailto triggers.
- **Direct Contact Button**: One-click email copy button with toast notification, resume download link, and direct social links.

## Self-Serve Drop-In Placeholders (Zero Code Editing)

All images, logos, and documents are self-serve. You can customize the site simply by dropping files with the following names into the project:

### Photos (`public/photos/`)
- `about-photo-1.jpg`: First clickable photo on the About page
- `about-photo-2.jpg`: Second clickable photo on the About page
- `listening-cover.jpg`: Album or podcast cover in the media card
- `reading-cover.jpg`: Book cover in the reading card
- `work-1.jpg`: Preview image for Experience 1
- `work-2.jpg`: Preview image for Experience 2
- `work-3.jpg`: Preview image for Experience 3
- `avatar.jpg`: Profile avatar in the iMessage chat card

### Logos (`public/logos/`)
- `company-1.svg`: First company logo for the logo wall
- `company-2.svg`: Second company logo for the logo wall
- `company-3.svg`: Third company logo for the logo wall
- `company-4.svg`: Fourth company logo for the logo wall

### Documents
- `public/resume.pdf`: Your printable resume for the direct download link

### Updating Text Facts & Real Experience
Open `src/data/portfolio.ts` to replace placeholder text with your real name, roles, dates, and links. All copy lives in this single file.

## Quality Scripts

- `npm run dev`: Start local development server (http://localhost:3000)
- `npm run build`: Build production static bundle and verify type-safety
- `npm run check-em-dash`: Automated audit ensuring zero em-dashes anywhere in the repository

## Connecting to GitHub & Vercel

### Step 1: Push to GitHub
```bash
# Initialize and commit
git add .
git commit -m "Initial commit: complete portfolio setup"

# Create a private or public GitHub repo using the authenticated GitHub CLI:
gh repo create portfolio --public --source=. --remote=origin --push
```

### Step 2: Deploy to Vercel
You can deploy directly using Vercel CLI or via the Vercel Dashboard:
```bash
# Option A: Deploy via npx vercel
npx vercel

# Option B: Vercel Web Dashboard
# 1. Go to https://vercel.com/new
# 2. Select your newly pushed GitHub repository: hannyww/portfolio
# 3. Click Deploy. Every subsequent git push to 'main' will deploy automatically!
```
