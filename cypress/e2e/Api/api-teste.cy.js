describe('Teste API', () => {
 var dojo = {
     aula: "API",
     duracao: 3,
     professor: "Fabio"
 }
    
 var frutas = ["maca","banana","batata"]

 var usuarios = [ 
  {"usuario": "testemarcelo@teste.com.br",
   "senha": "123456",
    "nome":"Marcelo"
},
{"usuario": "testemarcelo@teste.com.br",
  "senha": "123456",
  "nome":"Marcelo"
},
{"usuario": "testemarcelo@teste.com.br",
  "senha": "123456",
  "nome":"Marcelo"
}

]

it('Teste dojo', () => {
    expect(dojo.aula).to.equal("API")
    expect(dojo.duracao).to.equal("3")
    expect(dojo.professor).to.equal("Fabio")
});

it.only('VAlidação usuário', () => {
  expect(usuarios[2].usuario).to.equal("testemarcelo@teste.com.br")
  expect(usuarios[0].usuario).to.equal("testemarcelo@teste.com.br")
});
});