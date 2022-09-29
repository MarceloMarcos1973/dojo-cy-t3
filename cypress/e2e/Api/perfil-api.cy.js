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
                    "company": "dojo",
                    "status": "QA Senior",
                    "location": "SC",
                    "website": "https://conexaoqa.herokuapp.com/",
                    "skills": "testando",
                    "bio": "vai la"
                   }
        }).then((response) => {
            expect(response.status).to.equal(200)
        })

    });
    
});
