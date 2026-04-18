describe('Funcionalidade: Usuários', () => {

  // Criação um email único para esta execução específica
  const emailTeste = `miguel_qa_${Date.now()}@teste.com.br`;

  it('ST-1 - [API] Create User - ServeRest', () => {
    cy.request({
      method: 'POST',
      url: '/usuarios',
      body: {
        nome: "Miguel Guedes",
        email: emailTeste, 
        password: "teste",
        administrador: "true"
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq('Cadastro realizado com sucesso');
    });
  });

  // tentar criar user com o mesmo email
  it('ST-4 - [Negative] Attempt to register a user with an existing email', () => {
    cy.request({
      method: 'POST',
      url: '/usuarios',
      failOnStatusCode: false, 
      body: {
        nome: "Miguel Repetido",
        email: emailTeste, // mesmo email 
        password: "teste",
        administrador: "true"
      }
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq('Este email já está sendo usado');
    });
  });
});