///<reference types="cypress"/>

describe('TEste api com login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.request({
            method: 'POST',
            url: "https://conexaoqa.herokuapp.com/api/auth",
            body: {
                "email": "testemarcelo@teste.com.br",
                "password": "123456"
            }

        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('jwt')
            expect(response.duration).be.lessThan(300)
        })

    });

    it.only('Deve fazer login com erro', () => {
        cy.request({
            method: 'POST',
            url: "api/auth",
            body: {
                "email": "testemarcelo@teste.com.br",
                "password": "1234506"
            },
            failOnStatusCode: false

        }).then((response) => {
            expect(response.status).to.equal(401)
            expect(response.body.errors[0].msg).to.equal("Credenciais inválidas")
        })

    });
});