import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    watch: {
      ignored: ["**/data/**"], // 假API，先不讓json寫入的時候觸發vite reload
    },
  },
});
