import { selectors } from "../helpers/selectors"

class TestCase4 {
    open(string) {
        cy.visit(string)
    }

}
export default new TestCase4();