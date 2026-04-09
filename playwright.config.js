const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.js',

  retries: 0,

  // Maximum time one test can run
  timeout: 30 * 1000,

  expect: {
    timeout: 5000,
  },

  reporter: 'html',

  use: {
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
});
