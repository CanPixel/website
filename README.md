# CanPixel Realms

This is a Next.js application bootstrapped with `create-next-app`, using Firebase, Genkit, and ShadCN.

## Overview

This project is a personal portfolio and creative space for "Can Ur", a "Method Developer". It showcases a variety of projects, including games, music, and philosophical explorations. The website has a unique, mysterious, and rebellious aesthetic.

A key feature is the **Realms** section, a dynamic showcase of projects. Each project card has its own unique styling—from font and color to custom backgrounds and hover animations—turning each entry into a distinct "realm" for the visitor to discover.

## Key Features

- **Dynamic Portfolio:** A filterable gallery of creative game projects. Each project card features unique, tailored styling that reflects its theme.
- **Detailed Project Pages:** Each project has its own detail page with in-depth descriptions, tech stacks, and links.
- **Comprehensive Music Page:** A dedicated page for music projects, separated into distinct, stylized sections for different bands and solo work, including embedded Spotify players.
- **Stylized About Page:** A professionally designed page with a dynamic hero section and an animated timeline outlining the developer's journey.
- **Functional Contact Form:** A secure contact form powered by Resend for reliable email delivery.
- **Custom Navigation:** A responsive navigation menu that appears on scroll, maintaining a clean aesthetic.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
- **Database:** [Firebase Firestore](https://firebase.google.com/docs/firestore) for project data.
- **Email:** [Resend](https://resend.com/) for contact form submissions.
- **Generative AI:** [Genkit](https://firebase.google.com/docs/genkit) for the email sending flow.
- **Deployment:** Firebase App Hosting

## Getting Started

First, install the dependencies:
```bash
npm install
```

### Environment Variables

Before running the application, you need to set up your environment variables. Create a file named `.env.local` in the root of your project and add the following:

```
RESEND_API_KEY=YOUR_API_KEY_HERE
```

You can get a free API key from [resend.com](https://resend.com).

### Running the Development Server

Once your environment variables are set, run the development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.
##
#
#
#
#
```