/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        hero: "calc(100vh - 64px)",
      },
      backgroundImage: {
        "hero-bg": "url('/src/assets/images/chatter-hero.jpg')",
        "hero-bg2": "url('/src/assets/images/chatter-hero2.jpg')",
        "sign-up": "url('/src/assets/images/signup.jpg')",
      },
      color: {
        " lightRed": "#FFEDCC",
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        footer: "200px 1fr",
      },
    },
  },
  plugins: [],
};
