import { selectors } from "../helpers/selectors"

class TestCase3 {
    open(string) {
        cy.visit(string)
    }

    getCareersMenuFromHomepage(){
        return cy.get(selectors.careersMenuFromHomepage)
    }

    getCheckOpenPositionsBtn() {
        return cy.get(selectors.careersCheckOpenPositionsBtn)
    }

    getCareersFilterLocationDropDown() {
        return cy.get(selectors.careersFilterLocationDdl)
    }

    getOpenPositionCard() {
        return cy.get(selectors.careersOpenPositionCard)
    }

    getOpenPositionGeneralDescSection() {
        return cy.get(selectors.openPositionGeneralDesc)
    }

    getOpenPositionRequirementSection() {
        return cy.get(selectors.openPositionRequirement)
    }

    getOpenPositionResponsibilitiesSection() {
        return cy.get(selectors.openPositionResponsibilities)
    }

    getOpenPositionWhatWeOfferSection() {
        return cy.get(selectors.openPositionWhatWeOffer)
    }

    getApplyBtn() {
        return cy.get(selectors.openPositionApplyBtn)
    }

    getApplyFormInvalidEmailErrorMsg() {
        return cy.get(selectors.applyFormInvalidEmailErrorMsg)
    }

                 
}      



export default new TestCase3();