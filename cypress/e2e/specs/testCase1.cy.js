import { homepageUrl } from "../helpers/urls"
import testCase1 from "../page-objects/test-case-1"

describe('Homepage tests', () => {
    beforeEach(function () {
        testCase1.open(homepageUrl)

        Cypress.on('uncaught:exception', (err, runnable) => {
            console.error('Uncaught exception:', err);
            return false;
        });
    });

    it('open homepage and verify email error message from contact us form', function () {
        testCase1.verifyInvalidEmailAddress()
            .should('be.visible')
            .click()
        cy.fixture('example.json').then((form) => {
            cy.fixture('testDataInvalidEmails.json').then((emails) => {
                const data = { ...form, ...emails }

                data.invalidEmails.forEach(invalidEmail => {
                    testCase1.fillInNameInputField().type(data.name)
                    testCase1.fillInEmailInputField().type(invalidEmail)
                    testCase1.fillInMobileInputField().type(data.mobile)
                    testCase1.getInvalidEmailErrorMsg()
                        .should('be.visible')
                        .and('contain', "The e-mail address entered is invalid.")
                    testCase1.fillInSubjectInputField().type(data.subject)
                    testCase1.fillInMessageInputField().type(data.message)            

                    testCase1.fillInNameInputField().clear()
                    testCase1.fillInEmailInputField().clear()
                    testCase1.fillInMobileInputField().clear()
                    testCase1.fillInSubjectInputField().clear()
                    testCase1.fillInMessageInputField().clear()
                })
            })
        })
    })
})

