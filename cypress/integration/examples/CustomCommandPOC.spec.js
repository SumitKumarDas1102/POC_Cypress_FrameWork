import loginPage from '../PageObjects/loginPage'

describe('Test suite', function(){

    before(function(){
        cy.fixture('example').then(function(data){
            //To make available to fixture data for out of this block
            this.data = data
        })
    })


    
    it('login test', function(){
        cy.userlogin('admin@yourstore.com', 'admin')
        
        //Validate the bashroad title by assertion
        cy.title().should('be.equal','Dashboard / nopCommerce administration')

    })

    it('add user', function(){
        cy.userlogin('admin@yourstore.com', 'admin')

    })

    // it('Edit user', function(){

        //Create page class reference here to access the page class methods
    //     const lp = new loginPage()
    //     lp.visit()
    //     lp.fillEmail(this.data.email)
    //     lp.fillPassword(this.data.password)
    //     lp.clickLoginButton()

    //     //Validate the bashroad title by assertion
    //     cy.title().should('be.equal','Dashboard / nopCommerce administration')

    // })
})