/// <reference types="cypress" />

//import MeVero login page
import meVeroLoginPage from '../PageObjects/meVeroLoginPage'

before( function(){
    cy.fixture('meVeroCredentials').then(function(data){
        this.data = data

    })

})

describe('MeVero Automation', function(){
    it('Valid login test', function(){
        const meVeroPage = new meVeroLoginPage()
        meVeroPage.visit()
        meVeroPage.acceptCookie()
        
        


    })




})