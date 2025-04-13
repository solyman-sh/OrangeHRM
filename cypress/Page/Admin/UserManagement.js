import Millisecond from "../Navbar/MiliSecond";

class userManagement extends Millisecond {
  AdminBtn() {
    return cy.get("ul[class='oxd-main-menu'] li:first-child").click();
  }

  SystemUsername(username) {
    return cy
      .get(
        "div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']"
      )
      .should("be.visible")
      .type(username);
  }
  userRole() {
    return cy
      .get(
        ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
      )
      .click()
      .then(() => {
        return cy.get(".oxd-select-dropdown .oxd-select-option").eq(1).click();
      });
  }
  EmployeeName(employeename) {
    return cy
      .get("input[placeholder='Type for hints...']")
      .should("be.visible")
      .type(employeename)
      .wait(3000)
      .get(".oxd-autocomplete-dropdown .oxd-autocomplete-option")
      .first()
      .click();
  }

  Status() {
    // Step 1: Click the dropdown
    return cy
      .get(
        ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input"
      )
      .click()
      .then(() => {
        return cy
          .get(".oxd-select-dropdown .oxd-select-option")
          .eq(1) // index 1 means second option
          .click();
      });
  }
  SearchBtn() {
    return cy.get("button[type='submit']").should("be.visible").click();
  }

  ResetBtn() {
    return cy.contains(" Reset ").should("be.visible").click();
  }

  AssendingDesending() {
    // Click on the sort icon
    cy.get(".oxd-table-header-sort-icon").should("be.visible").click();

    // Wait for the dropdown to appear
    cy.get(".oxd-table-header-sort-dropdown").should("be.visible");

    // Click the "Ascending" option
    cy.contains("Ascending").click();
  }

  DeleteIcon(){
    cy.get("div[class='orangehrm-container'] button:nth-child(1)").should('be.visible').first().click()
    cy.wait(3000)
  }

  EditIcon(){
    cy.get('i.oxd-icon.bi-pencil-fill').first().click()
    cy.wait(3000)

  }
}
export default userManagement;
