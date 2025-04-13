import Millisecond from "../Navbar/MiliSecond";

class JobPage extends Millisecond {
  AdminBtn() {
    return cy.get("ul[class='oxd-main-menu'] li:first-child").click();
  }

}
export default JobPage