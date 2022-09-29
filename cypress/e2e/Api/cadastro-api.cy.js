/// <reference types="cypress" />

describe('Funcionalidade criar cadastro', () => {
    it('Deve fazer cadastro com sucesso via api', () => {
        let email = `teste1_${Math.floor(Math.random() * 1000)}@teste.com`
        cy.request({
            method: 'POST',
            url: 'api/users',
            body: {
                "name": "Marcelo Marcos",
                "email": email,
                "password": "123456"
                }
            }).then((response) => {
                expect(response.status).to.equal(201)
                expect(response.body).to.have.property('jwt')
            })
    });
    
});
