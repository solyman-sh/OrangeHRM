import HomePage from "../Page/Pages/HomePage"
import WebNavbar from "../Page/Navbar/WebNavbar"
import Password from "../Page/Pages/Password"


const homePage = new HomePage()
const webNavbar = new WebNavbar()
const password = new Password()
describe('Home Page verificaiton ', () => {
    beforeEach(()=>{
        cy.loginApp()
    })
    
    it('Verify About page ', () => {
        webNavbar.ViewProfile()
        webNavbar.AboutPage()
        webNavbar.push(2000)
    });

    it('Verify Support Page  ', () => {
        webNavbar.ViewProfile()
        webNavbar.SupportPage()
    });

    it('Verify Password Change Page', () => {
        webNavbar.ViewProfile()
        webNavbar.PasswordChange()
        password.CurrentPassword()
        password.NewPassword()
        password.ReNewPassword()
        password.SubmitButton()

    });

    it('Logout User Option ', () => {
        webNavbar.ViewProfile()
        webNavbar.Logout()
    });

    


});