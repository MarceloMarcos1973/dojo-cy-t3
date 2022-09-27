/// <reference types="cypress"/>
var faker=require('faker-br');
describe('funcionalidade: tela de login', ()=>{

    beforeEach(()=>{
        //Executar algo antes de cada cenário
        cy.visit('cadastrar')
    });
    
    it('Deve fazer cadastro de perfil com sucesso', () => {
    let nome = faker.name.findName()
      let email = faker.internet.email()
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(nome)
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('teste123')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('teste123')
        cy.get('[data-test="register-submit"]').click()
        cy.get('[data-test="dashboard-createProfile"]').should('be.visible')
        cy.get('[data-test="dashboard-welcome"]').should('contain', nome)
        cy.get('[data-test="dashboard-createProfile"]').click()
        cy.get('#mui-component-select-status').click()
        cy.contains('Estudante ou Aprendendo').click()
        cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type('equipe 3 dojo')
        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('https://www.super_amigos.com.br')
        cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type("balneario piçarras")
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('testes manuais, testes exploratórios')
        cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('123 oliveira 4')
        cy.get('[rows="1"]').type('primeiros testes automatizados de muitos que vem por ai')
        cy.get('[data-test="profile-submit"]').click()
        cy.get('[data-test="dashboard-welcome"]').contains('Bem-vindo')
    });


    it('Deve fazer cadastro de perfil com não sucesso', () => {
      let nome = faker.name.findName()
        let email = faker.internet.email()
          cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(nome)
          cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
          cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('teste123')
          cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('teste123')
          cy.get('[data-test="register-submit"]').click()
          cy.get('[data-test="dashboard-createProfile"]').should('be.visible')
          cy.get('[data-test="dashboard-welcome"]').should('contain', nome)
          cy.get('[data-test="dashboard-createProfile"]').click()
          cy.get('#mui-component-select-status').click()
          cy.contains('QA Pleno').click()
          cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type('equipe 3 dojo')
          cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('https:/www.super_amigos.com.br')
          cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type("balneario piçarras")
          cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('testes manuais, testes exploratórios')
          cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('123 oliveira 4')
          cy.get('[rows="1"]').type('primeiros testes automatizados de muitos que vem por ai')
          cy.get('[data-test="profile-submit"]').click()
          cy.get('.MuiFormHelperText-root').should('contain' , 'Digite uma url válida')
          
    });
  });