import { homepageUrl } from "../helpers/urls"
import testCase4 from "../page-objects/test-case-4"
import testCase3 from "../page-objects/test-case-3"
import { careersPageUrl } from "../helpers/urls";
import { selectors } from "../helpers/selectors";

describe('Homepage tests', () => {
    beforeEach(function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.error('Uncaught exception:', err);
            return false;
        });
    });

    it('open homepage and verify open positions', function () {
        testCase4.open(homepageUrl)
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

        const selectLocation = (location) => {
            testCase3.getCareersFilterLocationDropDown().select(location)
                .invoke('val')
                .should('eq', location);
        };

        const logPositionAndLink = (index) => {
            cy.get(`article:nth-child(${index}) > div > a`)
                .invoke('attr', 'href')
                .then((moreInfo) => {
                    cy.get(`article:nth-child(${index}) > div > a > div > div.front > h2`)
                        .invoke('text')
                        .then((position) => {
                            const logMsg = `POZICIJA ${position}\nLINK ${moreInfo}`;
                            cy.log(logMsg);
                            console.log(logMsg);
                        });
                });
        };

        const logAllPositionsAndLinks = () => {
            cy.get('.card-jobsHot').its('length').then((articleLength) => {
                for (let index = 1; index <= articleLength; index++) {
                    logPositionAndLink(index);
                }
            });
        };

        const positions = ['Sofia', 'Skopje']
        positions.forEach(location => {
            selectLocation(location);
            logAllPositionsAndLinks();
        })
    })
})



