/// <reference types="cypress" />

class loginPage {

//Open the web page
visit(){
    cy.visit("https://app.clickup.com/login")
}

fillEmail(value){
 const emailId = cy.get("//input[@id='email-input']")
 emailId.clear()
 emailId.type(value)
 return this
}

fillPassword(value){
    const password = cy.get("//input[@id='password-input']")
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