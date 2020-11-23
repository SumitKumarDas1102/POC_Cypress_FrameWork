/// <reference types="cypress" />

class loginPage {

//Open the web page
visit(){
    cy.visit("https://admin-demo.nopcommerce.com/login")
}

fillEmail(value){
 const emailId = cy.get('[id=Email]')
 emailId.clear()
 emailId.type(value)
 return this
}

fillPassword(value){
    const password = cy.get('[name=Password]')
    password.clear()
    password.type(value)
    return this
}

clickLoginButton(){
    const loginButton = cy.get('[type=submit]')
    loginButton.click()
}
}

//To make available this page class for all available test class.
export default loginPage