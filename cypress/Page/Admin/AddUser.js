import Millisecond from "../Navbar/MiliSecond";

class addUser extends Millisecond {
  AdminBtn() {
    return cy.get("ul[class='oxd-main-menu'] li:first-child").click();
  }

  AddBtn() {
    cy.get(
      "button[class='oxd-button oxd-button--medium oxd-button--secondary']"
    )
      .should("be.visible")
      .click();
    cy.get(".oxd-text.oxd-text--h6.orangehrm-main-title").should("be.visible");
  }

  // Admin
  UserRole() {
    cy.get(".oxd-select-text-input").eq(0).click();
    cy.contains(".oxd-select-option", "Admin").click(); // Replace 'ESS' with option text
  }
  EmployeeName(employeename) {
    cy.get("input[placeholder='Type for hints...']")
      .should("be.visible")
      .clear()
      .type(employeename)
      .wait(3000);
    cy.get(".oxd-autocomplete-dropdown .oxd-autocomplete-option")
      .should("be.visible")
      .first()
      .click();
  }

  Status() {
    cy.get(".oxd-select-text-input").eq(1).click();
    cy.contains(".oxd-select-option", "Enabled").click();
  }
  UserName(username) {
    cy.get("input.oxd-input--active")
      .eq(1) // Use class selector
      .should("be.visible") // Ensure it's visible
      .clear()
      .type(username); // Replace with actual input
  }

  Password(password) {
    cy.get('input[type="password"].oxd-input--active')
      .eq(0) // Select the first password input if there are multiple
      .should("be.visible")
      .type(password)
      .should("have.value", password)
      .wait(3000)
  }
  ConfirmPassword(password) {
    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input")
      .eq(0) // Select the first password input if there are multiple
      .should("be.visible")
      .type(password)
      .should("have.value", password)
      .wait(3000)
  }
  SaveBtn(){
    return cy.get("button[type='submit']").should('be.visible').click().wait(3000)
    
  }
  CancelBtn(){
    return cy.contains(" Cancel ").should('be.visible').click()
  }
}
export default addUser;
