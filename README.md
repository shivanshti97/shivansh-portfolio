# Shivansh Tiwari — Personal Developer Portfolio

> **Building thoughtful digital experiences at the intersection of software and AI.**

An editorial, high-performance personal developer portfolio built for **Shivansh Tiwari** (Computer Science undergraduate at USICT GGSIPU, AWS Student Builder Group Leader, and frontend engineer).

Designed with inspiration from modern editorial sites, deep dark obsidian canvas, typography pairing (`Instrument Serif` + `Inter` + `JetBrains Mono`), interactive case studies, sound micro-interactions, live command palette (`⌘K`), and an embedded developer terminal.

---

## 🌟 Highlights & Features

- **Editorial Aesthetic:** High-contrast typography combining serif headlines with clean, modern sans-serif body and monospace accents.
- **Interactive Project Case Studies:** In-depth technical modals breaking down the problem, engineered solution, architecture highlights, and key learnings for each project.
- **Interactive Developer Terminal:** Launchable CLI drawer (`dev:~/shivansh $`) with commands like `whoami`, `skills`, `aws`, `education`, and `contact`.
- **Command Palette (`Cmd+K` / `Ctrl+K`):** Instant keyboard navigation across sections, fast project filter, and one-click email copying.
- **Micro-Interaction Sound Synthesizer:** Subtle synthesized audio clicks and chimes using the Web Audio API (zero audio file downloads, instant latency, and full mute controls).
- **Authentic Experience & Skills Matrix:** Categorized into Core, Proficient, and Exploring—no arbitrary percentages or inflated claims.
- **Responsive & Accessible:** Fully optimized across iPhone, Android, tablet, and desktop viewports with reduced-motion support.
- **SEO & Social Optimization:** Pre-configured Open Graph tags, Twitter card metadata, `robots.txt`, and automated `sitemap.xml`.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Library:** React 19, TypeScript
- **Styling:** Tailwind CSS, Custom Editorial Theme
- **Icons:** Lucide React
- **Typography:** Instrument Serif, Inter, JetBrains Mono (via `next/font/google`)
- **Deployment:** Vercel

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies

```bash
cd shivansh-portfolio
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm run start
```

---

## 🌐 Deploying to Vercel (Step-by-Step)

### Option A: Via GitHub (Recommended)

1. Initialize git in this directory (if not already done):
   ```bash
   git init
   git add .
   git commit -m "feat: complete personal developer portfolio for Shivansh Tiwari"
   ```
2. Create a new repository on your GitHub account (`https://github.com/shivanshti97/portfolio` or `shivansh-portfolio`).
3. Push your repository:
   ```bash
   git remote add origin https://github.com/shivanshti97/portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
5. Select your repository `portfolio` and click **"Import"**.
6. Keep the default settings (Next.js preset) and click **"Deploy"**.
7. Your portfolio will be live in ~45 seconds on `https://your-project.vercel.app`!

### Option B: Via Vercel CLI

```bash
npm i -g vercel
vercel
```

---

## 📄 License

Created with care for **Shivansh Tiwari**. All rights reserved.
