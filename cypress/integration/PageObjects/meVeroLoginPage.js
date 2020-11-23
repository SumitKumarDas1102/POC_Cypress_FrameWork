/// <reference types="cypress" />

class meVeroLoginPage{

    visit(){
        cy.visit('https://mevero.com/landing-feed')
        cy.wait(200)
    }

    acceptCookie(){
        const cookieButton = cy.get('.cc-btn')
        cookieButton.click()
    }


}
export default meVeroLoginPage