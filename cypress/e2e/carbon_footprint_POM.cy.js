/// <reference types="Cypress" />

import { loginPage } from "../pages/loginPage";
import { dashboard } from "../pages/dashboard";

describe("Test Red Platform App", () => {
  beforeEach("01 - Landing Page -> Log in the user", () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    loginPage.logInUser();
  });

  it("02 - Dashboard -> Log out out the user", () => {
    dashboard.logOutUser();
  });

  it("03 - Settings -> Update user profile information", () => {
    dashboard.updateUserProfile();
  });

  it("04 - My tickets -> Create new ticket", () => {
    dashboard.createNewTicket();
  });

  it("05 - Dashboard -> Non-functional testing (assert number of cards)", () => {
    dashboard.assertNumberOfCards();
  });
});
