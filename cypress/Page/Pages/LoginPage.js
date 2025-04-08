import Millisecond from "../Navbar/MiliSecond";

class LoginPage extends Millisecond {
  visit() {
    return cy
      .visit(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      )
      .then(() => {
        return cy.get(".orangehrm-login-branding").should("be.visible");
      });
  }

  username(username) {
    return cy
      .get("input[name='username']")
      .should("be.visible")
      .type(username);
  }
  password(password) {
    return cy
      .get("input[name='password']")
      .should("be.visible")
      .type(password);
  }
  submitButton() {
    return cy.get("button[type='submit']").should('be.visible').click();
  }

  VerifyHomePage(){
    return cy.get("#app h6").should('be.visible')
  }
}
export default LoginPage;
