import { selectors } from "../helpers/selectors"

class TestCase1 {
    open(string) {
        cy.visit(string)
    }

    verifyInvalidEmailAddress() {
        return cy.get(selectors.contactUsBtn)
    }

    getContactUsForm(){
        return cy.get(selectors.contactUsForm)
    }

    fillInNameInputField() {
        return cy.get(selectors.contactUsNameInputField)
    }

    fillInEmailInputField() {
        return cy.get(selectors.contactUsEmailInputField)
    }

    getInvalidEmailErrorMsg() {
        return cy.get(selectors.contactUsInvalidEmailErrorMsg)
    }

    fillInMobileInputField() {
        return cy.get(selectors.contactUsMobileInputField)
    }

    fillInSubjectInputField() {
        return cy.get(selectors.contactUsSubjectInputField)
    }

    fillInMessageInputField() {
        return cy.get(selectors.contactUsMessageInputField)
    }

    getSendBtn() {
        return cy.get(selectors.contactUsSendBtn)
    }
}
export default new TestCase1();