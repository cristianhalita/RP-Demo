import { input, selector } from "../support/data";

export class Dashboard {
  // It logs out the user
  logOutUser() {
    cy.get(selector.LogOutButton).scrollIntoView().click();
    cy.get(selector.YesButton).click();
    cy.url().should("eq", "https://landingpage.redplatform-dev.com/");
  }

  // It updates the user profile
  updateUserProfile() {
    cy.get(selector.SettingsButton).click();
    cy.get(selector.UpdateProfileButton).click();
    cy.get(selector.Email).should("have.attr", "readonly");
    cy.get(selector.FirstName).clear().type("Updated First Name");
    cy.get(selector.LastName).clear().type("Updated Last Name");
    cy.get(selector.SaveButton).click();
    cy.get(selector.SuccessAlert).should("be.visible");
  }

  // It creates a new ticket
  addNewTicket() {
    cy.get(selector.AddNewTicketButton).click();
    cy.get(selector.TypeSelect).first().click();
    cy.get(selector.TaskRadio).click();
    cy.get(selector.SelectButton).last().click();
    cy.get(selector.TypeSelect).last().click();
    cy.get(selector.PriorityRadio).click();
    cy.get(selector.SelectButton).last().click();
    cy.get(selector.SubjectField).click().type("New Ticket Title");
    cy.get(selector.IssueField).click().type("New Ticket Description");
    cy.get(selector.SaveButton).click();
    cy.wait("@getTickets");
  }

  // It asserts the number of cards
  assertNumberOfCards() {
    cy.get(selector.NumberOfCards).should("have.length", 4);
  }

  // It creates a new ticket and assert that the number of tickets updated
  createNewTicket() {
    cy.get(selector.MyTicketsButton).click();
    cy.intercept(
      "https://vlec.redplatform-dev.com/api/trudesk-user/get-my-tickets"
      // "/api/files/public/631060f0138e3013c731b022"
    ).as("getTickets");
    cy.wait("@getTickets");
    let totalCount;
    cy.get(selector.TicketsList).then(($value) => {
      totalCount = Cypress.$($value).length;
      expect($value).to.have.length(totalCount);
    });
    this.addNewTicket();
    cy.get(selector.TicketsList).then(($value) => {
      totalCount = Cypress.$($value).length;
      expect($value).to.have.length(totalCount);
    });
  }
}

export const dashboard = new Dashboard();
