///<reference types="cypress" />

let token

beforeEach(() => {
    cy.token().then((tkn) => {
        token = tkn
    })
});
describe('Funcionalidade: Criar Perfil Via Api', () => {
    it('Deve criar perfil com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'api/profile',
            headers: {
                Cookie: token
            },
            body: {
                    "company": "dojo cypress t3",
                    "status": "QA Senior",
                    "location": "SC",
                    "website": "https://conexaoqa.herokuapp.com/",
                    "skills": "MUITO TALENTO E POUCA EXECUÇÃO",
                    "bio": "vai la"
                   }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.location).to.equal('SC')
            expect(response.body.date).to.equal("2022-09-28T23:06:07.910Z")
        })


    });
    
});
