/// <reference types="cypress" />

class Sanchari_dis_project{

    //To visit or open the webapplication
    visit_webPage(){
        cy.visit("https://app.clickup.com/login")
    }

    type_EmailID(value){
        const email_field = cy.get('[type="email"]')
        email_field.clear()
        email_field.type(value)
        return this
    }

    type_PassWord(value){
        const password_field = cy.get('[type="password"]')
        password_field.clear()
        password_field.type(value)
        return this
    }

    click_LoginButton(){
        const loginButton = cy.get('[type="submit"]')
        loginButton.click()
    }

}

//To make available this page class for all available test class.
export default Sanchari_dis_project