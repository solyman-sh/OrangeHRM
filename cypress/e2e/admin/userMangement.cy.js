
import userManagement from "../../Page/Admin/UserManagement";
import addUser from "../../Page/Admin/AddUser";


const UserManagement = new userManagement()
const adduser =  new addUser()

// fixture variable detected 
let userData


describe('Admin Page Verification', () => {


    beforeEach(()=>{
        cy.loginApp()
        cy.fixture('userManagement').then((data)=>{
            userData = data
        })
    })
    
    it('Verify User management Navbar', () => {
        
        UserManagement.AdminBtn()
        UserManagement.SystemUsername(userData.username)
        UserManagement.userRole()
        UserManagement.EmployeeName(userData.employeename)
        UserManagement.Status()
        UserManagement.SearchBtn()
        UserManagement.push(3000)
        UserManagement.ResetBtn()
        // UserManagement.AssendingDesending()
        UserManagement.DeleteIcon()
        UserManagement.EditIcon()
        adduser.UserRole()
        adduser.EmployeeName(userData.employeename)
        adduser.Status()
        adduser.UserName(userData.username)
        adduser.SaveBtn()
        adduser.push(3000)


    });

    it('Add User Verification ', () => {
        adduser.AdminBtn()
        adduser.AddBtn()
        adduser.UserRole()
        adduser.EmployeeName(userData.employeename)
        adduser.Status()
        adduser.UserName(userData.username)
        adduser.Password(userData.password)
        adduser.ConfirmPassword(userData.password)
        adduser.SaveBtn()
        // adduser.CancelBtn()


    });

});