import Millisecond from "../Navbar/MiliSecond";
class Password extends Millisecond{
    CurrentPassword(){
        return cy.get("div[class='oxd-form-row'] div[class='oxd-grid-2 orangehrm-full-width-grid'] div[class='oxd-grid-item oxd-grid-item--gutters'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[type='password']").type("Admin")
    }
    NewPassword(){
        return cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin123")
    }

    ReNewPassword(){
        return cy.get("div[class='oxd-form-row user-password-row'] div[class='oxd-grid-2 orangehrm-full-width-grid'] div[class='oxd-grid-item oxd-grid-item--gutters'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[type='password']").type("Admin123")
    }
    SubmitButton(){
        return cy.get("button[type='submit']").click()
    }
}
export default Password