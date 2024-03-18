import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    app_url: "http://localhost:5173",
  },
  e2e: {
    setupNodeEvents(on, config) {
      return config; // Important to return the config object
    },
  },
});
