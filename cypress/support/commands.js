// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

//Custom command 01 for Login:



// Cypress.Commands.add("userlogin", (email, password) => {

    
//     it('valid login test', function(){
//         import loginPage from '../PageObjects/loginPage'
//         //Create page class reference here to access the page class methods
//         const lp = new loginPage()
//         lp.visit()
//         lp.fillEmail(email)
//         lp.fillPassword(password)
//         lp.clickLoginButton()
//     })

//  })