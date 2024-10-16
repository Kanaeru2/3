import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Perbaikan di sini
        accent: "#ffc639",
        primary: "#eeeeee", // Tambahkan '#' di depan kode hex
        secondary: "#393e46", // Tambahkan '#' di depan kode hex
        dark: "#222831", // Tambahkan '#' di depan kode hex
      },
    },
  },
  plugins: [],
};

export default config;
