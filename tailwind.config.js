// tailwind.config.js

import { defineConfig } from "vite";
import windiCSS from "vite-plugin-windicss";

export default defineConfig({
  // ...other configurations...

  plugins: [windiCSS()],
});
