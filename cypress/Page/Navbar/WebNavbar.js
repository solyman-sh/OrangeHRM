import Millisecond from "../Navbar/MiliSecond";


class WebNavbar extends Millisecond{


    ViewProfile(){
        // DropDown next Change 
        return cy.get(".oxd-userdropdown-tab").click()
    }
    AboutPage() {
        return cy.get("ul[role='menu'] > li:first-child")
          .click()
          .then(() => {
            cy.get(".oxd-dialog-close-button").click();
          });
    }
    
    SupportPage(){
        return cy.get("ul[role='menu'] > li:nth-child(2)")
          .click()
          .then(() => {
            cy.get(".orangehrm-card-container h6").should('be.visible')
          });
    }

    PasswordChange(){
        return cy.get("ul[role='menu'] > li:nth-child(3)")
          .click()
          .then(() => {
            cy.get(".oxd-layout-context h6").should('be.visible')
          });
    }

    Logout(){
      return cy.get("ul[role='menu'] > li:nth-child(4)").click()
    }




    
}
export default WebNavbar