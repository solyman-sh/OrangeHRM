
import LoginPage from "../Page/Pages/LoginPage"



const loginPage = new LoginPage()

describe('OrangeHRM web site Automation', () => {
  
  it('login Verify ', () => {
    loginPage.visit()
    loginPage.push()
    loginPage.username("Admin")
    loginPage.password("admin123")
    loginPage.submitButton()
    loginPage.VerifyHomePage()
  })
})