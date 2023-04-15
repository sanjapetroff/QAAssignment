import { selectors } from "../helpers/selectors";
import { homepageUrl } from "../helpers/urls"
import { companyPageUrl } from "../helpers/urls";
import { musalaFacebookPageBaseUrl } from "../helpers/urls";
import testCase2 from "../page-objects/test-case-2"
require('@cypress/xpath');

describe('Homepage tests', () => {
    beforeEach(function () {
        testCase2.open(homepageUrl)

        Cypress.on('uncaught:exception', (err, runnable) => {
            console.error('Uncaught exception:', err);
            return false;
        });
    });

    it('open homepage and go to Company menu and verify the url', function () {
        testCase2.getCompanyMenuFromHomepage().click()
        cy.get(companyPageUrl)
            .window().then((win) => {
                const pageLoadStatus = win.document.readyState;
                return pageLoadStatus;
            }).should('eq', 'complete')
        cy.url().should('eq', companyPageUrl.url)

        testCase2.verifyLeadershipSection()
            .should('be.visible')

        testCase2.companyFacebookIcon()
            .click({ force: true })

        cy.origin(musalaFacebookPageBaseUrl.url, () => {
            cy.visit('/MusalaSoft?fref=ts')
            cy.url()
                .should('include', '/MusalaSoft?fref=ts')
            cy.on('uncaught:exception', (e) => {
                if (e.message.includes('Things went bad')) {
                    return false
                }
            })
        })

    })
})


