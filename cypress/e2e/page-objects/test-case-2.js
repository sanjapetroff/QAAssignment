import { selectors } from "../helpers/selectors"


class TestCase2 {
    open(string) {
        cy.visit(string)
    }

    getCompanyMenuFromHomepage() {
        return cy.get(selectors.companyMenuFromHomepage)
    }

    verifyLeadershipSection() {
        return cy.get(selectors.companyMenuLeadershipSection)
    }

    companyFacebookIcon() {
        return cy.get(selectors.companyFacebookIcon)
        
    }
}
export default new TestCase2();