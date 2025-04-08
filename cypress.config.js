const { defineConfig } = require("cypress");
require("dotenv").config(); // Load .env file

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Load environment variables
      config.env.username = process.env.USER_NAME;
      config.env.password = process.env.USER_PASSWORD;
      config.baseUrl = process.env.BASE_URL; // ✅ Move baseUrl inside setupNodeEvents
      
      return config;
    },
    baseUrl: process.env.BASE_URL, // ✅ Ensure baseUrl is set globally
  },
});
