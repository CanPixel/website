# CanPixel Realms

This is a Next.js application bootstrapped with `create-next-app`, using Firebase, Genkit, and ShadCN.

## Overview

This project is a personal portfolio and creative space for "Can Ur", a "Method Developer". It showcases a variety of projects, including games, music, and philosophical explorations. The website has a unique, mysterious, and rebellious aesthetic.

A key feature is the **Realms** section, an infinitely scrolling showcase of projects. Each project card has its own unique styling—from font and color to custom backgrounds and hover animations—turning each entry into a distinct "realm" for the visitor to discover.

## Key Features

- **Dynamic Portfolio:** An infinitely scrolling gallery of creative projects. Each project card features unique, tailored styling that reflects its theme, including custom fonts, colors, and background textures.
- **Music Page:** A dedicated page for music projects, including an embedded Spotify player for featured tracks.
- **About Page:** A stylized timeline outlining the developer's journey and philosophy.
- **Contact Form:** A functional contact page for inquiries and social links.
- **Custom Navigation:** A responsive, text-based navigation menu that appears on scroll, maintaining a clean aesthetic.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
- **Database:** [Firebase Firestore](https://firebase.google.com/docs/firestore) for project data.
- **Generative AI:** [Genkit](https://firebase.google.com/docs/genkit) (for potential future integrations)
- **Deployment:** Firebase App Hosting

## Getting Started

First, install the dependencies:
```bash
npm install
```

Then, run the development server:
```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter and Space Grotesk, custom Google Fonts that define the site's typography.
