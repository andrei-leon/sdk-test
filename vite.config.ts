import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import mkcert from "vite-plugin-mkcert";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      globals: {
        global: true,
        process: true,
      },
    }),
    mkcert(),
  ],
  optimizeDeps: {
    exclude: ["nomis-sdk-evm"],
  },
  server: {
    port: 5174,
    strictPort: true,
    host: true,
  },
});
