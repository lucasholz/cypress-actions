const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "b3cqvw",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    baseUrl: "https://loginxp.vercel.app"
  }
});
