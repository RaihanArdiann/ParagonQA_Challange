const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
  },
});
