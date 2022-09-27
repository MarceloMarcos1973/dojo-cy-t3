/// <reference types="cypress"/>
import usuario from "../../fixtures/usuario.json"

describe('funcionalidade: tela de login', ()=>{

    before(()=>{
        //Executar algo antes de todos os cenários
    });

    beforeEach(()=>{
        //Executar algo antes de cada cenário
        cy.visit('login')
    });
    
    after(()=>{
        //Executar algo depois de todos os cenários
        
    });

    afterEach(()=>{
        //Executar algo depois  de cada cenários
       // cy.screenshot()
        
    });
    

    it('deve fazer login com sucesso', ()=>{
    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('testemarcelo@teste.com.br')
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123456')
    cy.get('[data-test="login-submit"]').click()
    cy.get('[data-test="dashboard-welcome"]').should('contain', 'Marcelo')
    });

   

    it('deve validar mensagem de erro ao fazer login com dados invalidos', ()=>{
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('testemarcelo@teste.com.br')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type("1234569")
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')
    });
    it('deve fazer login com sucesso - usando commands', ()=>{
        cy.login('testemarcelo@teste.com.br', '123456')
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Marcelo')

        });  
        it('Deve fazer cadastro com sucesso usando fixture', () => {
        cy.login(usuario.usuario, usuario.senha) 
        cy.get('[data-test="dashboard-welcome"]').should('contain', usuario.nome)   
        });

        it.only('Deve fazer cadastro com sucesso usando fixture II', () => {
            cy.fixture("multi-usuario").then((multi)=>{
                cy.login(multi[1].usuario, multi[1].senha)
                cy.get('[data-test="dashboard-welcome"]').should('contain' , multi[1].nome)
            })
        });
    });