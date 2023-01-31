import { input, selector } from "../support/data";

export class LoginPage {
  // It logs in the user
  logInUser() {
    cy.visit("https://vlec.redplatform-dev.com/");
    cy.get(selector.UsernameField).type(input.ValidUsername);
    cy.get(selector.PasswordField).type(input.ValidPassword);
    cy.get(selector.LogInButton).click();
    cy.url().should("contain", "/client-area/dashboard");
  }
}

export const loginPage = new LoginPage();
