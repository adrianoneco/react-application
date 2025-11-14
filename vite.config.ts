import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Suppress the specific PostCSS `from` warning which is noisy but harmless
function silencePostCSSFromWarning() {
  let originalConsoleWarn: typeof console.warn | null = null;

  const filter = (msg: unknown) => {
    try {
      if (typeof msg === "string") {
        return msg.includes("A PostCSS plugin did not pass the `from` option to `postcss.parse`");
      }
      if (Array.isArray(msg) && typeof msg[0] === "string") {
        return String(msg[0]).includes("A PostCSS plugin did not pass the `from` option to `postcss.parse`");
      }
    } catch (e) {
      // ignore
    }
    return false;
  };

  return {
    name: "silence-postcss-from-warning",
    configureServer() {
      if (!originalConsoleWarn) {
        originalConsoleWarn = console.warn.bind(console);
        console.warn = (...args: any[]) => {
          // If it's the PostCSS `from` warning, print stack trace to help identify the plugin.
          if (args.some(filter)) {
            originalConsoleWarn("[postcss-from-warning] detected — emitting stack trace for diagnosis:");
            originalConsoleWarn(new Error().stack);
            // Also print the original message so we have full context.
            originalConsoleWarn(...args);
            return;
          }
          return originalConsoleWarn!(...args);
        };
      }
    },
    buildStart() {
      if (!originalConsoleWarn) {
        originalConsoleWarn = console.warn.bind(console);
        console.warn = (...args: any[]) => {
          if (args.some(filter)) {
            originalConsoleWarn("[postcss-from-warning] detected — emitting stack trace for diagnosis:");
            originalConsoleWarn(new Error().stack);
            originalConsoleWarn(...args);
            return;
          }
          return originalConsoleWarn!(...args);
        };
      }
    },
    closeBundle() {
      if (originalConsoleWarn) {
        console.warn = originalConsoleWarn;
        originalConsoleWarn = null;
      }
    },
  };
}

export default defineConfig({
  plugins: [
    silencePostCSSFromWarning(),
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
