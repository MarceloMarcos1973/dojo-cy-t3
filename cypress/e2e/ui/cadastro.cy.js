/// <reference types="cypress"/>
var faker=require('faker-br');
describe('funcionalidade: tela de login', ()=>{

    before(()=>{
        //Executar algo antes de todos os cenários
    });

    beforeEach(()=>{
        //Executar algo antes de cada cenário
        cy.visit('cadastrar')
    });
    
    after(()=>{
        //Executar algo depois de todos os cenários
        
    });

    afterEach(()=>{
        //Executar algo depois  de cada cenários
       // cy.screenshot()
        
    });

    it('Deve fazer cadastro com sucesso', () => {
    let nome = faker.name.findName()
      let email = faker.internet.email()
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(nome)
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('teste123')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('teste123')
        cy.get('[data-test="register-submit"]').click()
        cy.get('[data-test="dashboard-createProfile"]').should('be.visible')
        cy.get('[data-test="dashboard-welcome"]').should('contain', nome)

    
    });

    });