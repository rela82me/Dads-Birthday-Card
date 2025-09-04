# Dad Card 💌

A beautiful, animated, and customizable digital birthday card for a loved one. Built with React, Vite, and Tailwind CSS.

![Dad Card Screenshot](placeholder_for_screenshot.png)
_(Add a screenshot or GIF of your project here!)_

This project is a heartfelt, single-page digital birthday card designed to celebrate a special person. It features smooth animations, customizable content, and a clean, modern aesthetic. It was built as a fun personal project and a showcase of front-end development skills.

## ✨ Features

- **Stunning Animations**: Built with `framer-motion` for a fluid and engaging user experience.
- **Themed & Customizable**: Easily change the name, year, color theme, and photo gallery by editing one file.
- **Visual Effects**: Includes dynamic components like a starscape background, glowing backdrops, and confetti effects.
- **Responsive Design**: Looks great on both desktop and mobile devices.
- **Modern Tech Stack**: Powered by React, Vite, TypeScript, and styled with Tailwind CSS.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18.x or higher)
- npm, yarn, or pnpm

### Installation

1.  Clone the repository:

    ```sh
    git clone https://github.com/your-username/dad-card.git
    cd dad-card
    ```

2.  Install the dependencies:

    ```sh
    npm install
    ```

### Running the Development Server

To start the local development server, run:

```sh
npm run dev
```

Open http://localhost:5173 (or whatever port is shown) in your browser to see the result. The page will auto-update as you make changes.

### Building for Production

To create a production-ready build, run:

```sh
npm run build
```

This will create a `dist` folder with the static assets that you can deploy to any web hosting service.

## 🎨 Customization

All the content for the card can be easily customized by editing the `src/lib/constants.ts` file.

```typescript
// src/lib/constants.ts

// --- Quick customization (edit these) ---
export const DAD_NAME = "Dad"; // e.g. "Miguel" or "Robert"
export const BIRTHDAY_YEAR = 2025;
// theme options: "gold", "ocean", "forest", "violet"
export const THEME = "gold" as const;

// Swap with your real photos
export const GALLERY = [
  { src: "https://.../photo1.jpg", alt: "Throwback road trip" },
  { src: "https://.../photo2.jpg", alt: "Working on a project together" },
  // ... add more photos here
];
```

You can also change the text directly in the `src/App.tsx` component for more in-depth modifications.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
