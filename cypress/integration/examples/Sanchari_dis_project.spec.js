/// <reference types="cypress" />

//Import the Page class
import loginPage from '../PageObjects/loginPage'
import Sanchari_dis_project from '../PageObjects/Sanchari_dis_project'

describe('Test suites', function(){

    //Load the test credentials from fixture file
    before(function(){
        cy.fixture('Sanchari_dis_credentials').then(function(data){
            //To make available to fixture data for out of this block
            this.data = data
        })
    })

        //TC-01 - Open the web application
    it('TC-01 Open the application', function(){
        const webLoginPage = new Sanchari_dis_project()
        webLoginPage.visit_webPage()
        cy.wait(200)
    })

        //TC-02 - Log into the application
    it('TC-02 - Log into the application', function(){
        const login_Page = new Sanchari_dis_project()
        login_Page.visit_webPage()
        login_Page.type_EmailID("ashish.corelynx@hotmail.com")
        login_Page.type_PassWord("C0relynx")
        login_Page.click_LoginButton()

    })
    
    


})