# Jayveer Jebaliya — Portfolio

React + Vite + TypeScript + Tailwind CSS v4 + Framer Motion.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Add your own assets

The `public/` folder is intentionally empty. Drop your files in with these
exact names (or update the paths in `src/config/site.ts`) and they'll be
picked up automatically — nothing else needs to change:

| File                                      | Used for                         |
| ------------------------------------------ | --------------------------------- |
| `public/logo.jpg`                          | Header avatar / logo              |
| `public/favicon.png`                       | Browser tab icon                  |
| `public/social-preview.png`                | Open Graph / Twitter share image  |
| `public/about-portrait.jpg`                | Portrait in the About section     |
| `public/jayveer__CV.pdf`                   | Resume view/download links        |
| `public/projects/rag-chatbot.png`          | RAG based Chatbot project image   |
| `public/projects/research-assistant.png`   | AI Research Assistant image       |
| `public/projects/deepfake-detection.png`   | Deep-Fake Detection image         |
| `public/projects/medical-diagnosis.png`    | Medical Diagnosis System image    |

Until an image is uploaded, its slot shows a quiet placeholder (icon + the
expected filename) instead of a broken image — so the site still looks
intentional while you're filling things in.

## Editing content

All copy — name, summary, experience, projects, about text — lives in
`src/config/site.ts`. Types are in `src/types/index.ts`.

## Structure

```
src/
  components/   Header, Hero, Experience, Projects, About, Resume, Footer,
                Section (shared wrapper), NeuralBackground (hero signature visual)
  hooks/        useActiveSection — scroll-spy for the nav
  config/       site.ts — all content and site metadata
  types/        shared TypeScript types
  index.css     design tokens (Tailwind v4 @theme) + base styles
```
