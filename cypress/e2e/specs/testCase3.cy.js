import { selectors } from "../helpers/selectors";
import { homepageUrl } from "../helpers/urls"
import { careersPageUrl } from "../helpers/urls";
import testCase3 from "../page-objects/test-case-3";
import testCase1 from "../page-objects/test-case-1"
const path = require('path');

describe('Homepage tests', () => {
    beforeEach(function () {
        testCase3.open(homepageUrl)

        Cypress.on('uncaught:exception', (err, runnable) => {
            console.error('Uncaught exception:', err);
            return false;
        });
    });

    it('open homepage and verify careers page', function () {
        testCase3.getCareersMenuFromHomepage()
            .should('be.visible')
            .click()
        testCase3.getCheckOpenPositionsBtn()
            .should('be.visible')
            .click()

        cy.get(careersPageUrl)
        .window().then((win) => {
            const pageLoadStatus = win.document.readyState;
            return pageLoadStatus;
        }).should('eq', 'complete')
        cy.url().should('eq', careersPageUrl.url)

        testCase3.getCareersFilterLocationDropDown()
        .select('Anywhere')
        .invoke('val')
        .should('eq','Anywhere')

        testCase3.getOpenPositionCard().click()

        testCase3.getOpenPositionGeneralDescSection()
            .should('be.visible')
        testCase3.getOpenPositionRequirementSection()
            .should('be.visible')
        testCase3.getOpenPositionResponsibilitiesSection()
            .should('be.visible')
        testCase3.getOpenPositionWhatWeOfferSection()
            .should('be.visible')
        testCase3.getApplyBtn()
            .should('be.visible')
            .click()

        cy.fixture('example.json').then((form) => {
            cy.fixture('testDataInvalidEmails.json').then((emails) => {
                const data = { ...form, ...emails }
                testCase1.fillInNameInputField().type(data.name)
                testCase1.fillInEmailInputField().type(data.invalidEmails[0])
                testCase1.fillInMobileInputField().type(data.mobile)
                testCase3.getApplyFormInvalidEmailErrorMsg()
                    .should('be.visible')
                    .and('contain', "The e-mail address entered is invalid.")
                testCase1.fillInMessageInputField().type(data.message)
                })
            })
        cy.get(selectors.applyFormChooseFileBtn)
            .selectFile('cypress/e2e/files/CV.docx')
    })
})

