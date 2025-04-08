// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add("loginApp", () => {
    cy.visit(Cypress.config("baseUrl")); // Base URL auto use hobe
    cy.get("input[name='username']").type(Cypress.env("username"));
    cy.get("input[name='password']").type(Cypress.env("password"));
    cy.get("button[type='submit']").click();
    cy.wait(3000)
  });



// api call kore user kora jai 

// Cypress.Commands.add("login", () => {
//   cy.request({
//     method: "GET",
//     url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
//     body: {
//       email: process.env.USER_EMAIL,
//       password: process.env.USER_PASSWORD
//     }
//   }).then((resp) => {
//     window.localStorage.setItem("authToken", resp.body.token);
//   });
// });










