// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Ignore specific cross‑origin script errors so they don't fail tests
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('Script error')) {
    return false; // prevents Cypress from failing the test
  }
});
