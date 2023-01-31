const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1920,
    viewportHeight: 860,
    watchForFileChanges: false,
    // baseUrl: "https://landingpage.redplatform-dev.com/",
  },
});
