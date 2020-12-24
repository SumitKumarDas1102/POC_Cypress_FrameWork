/// <reference types="cypress" />


//import the custom page object class to this current test class
import loginPage from '../PageObjects/loginPage'

describe('Test suite', function(){

    before(function(){
        cy.fixture('example').then(function(data){
            //To make available to fixture data for out of this block
            this.data = data
        })
    })


    it('valid login test', function(){

        //Create page class reference here to access the page class methods
        const loginPage_n = new loginPage()
        loginPage_n.visit()
        loginPage_n.fillEmail(this.data.email)
        loginPage_n.fillPassword(this.data.password)
        loginPage_n.clickLoginButton()

        //Validate the bashroad title by assertion
        //cy.title().should('be.equal','Dashboard / nopCommerce administration')

    })
})