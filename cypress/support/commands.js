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

Cypress.Commands.add("login", (username, password) => {
  cy.visit("https://vlec.redplatform-dev.com/");
  cy.get("#username").type(username);
  cy.get("#password").type(password);
  cy.get("#kc-login").click();
  cy.url().should("contain", "/client-area/dashboard");
});

Cypress.Commands.add("compareTwoElemText", (elem1, elem2) => {
  let elemText1, elemText2;
  cy.get(elem1)
    .invoke("text")
    .then((text1) => {
      elemText1 = text1;
    });
  cy.get(elem2)
    .eq(0)
    .invoke("text")
    .then((text2) => {
      elemText2 = text2;
      expect(elemText1).to.equal((elemText2 = text2));
    });
});
