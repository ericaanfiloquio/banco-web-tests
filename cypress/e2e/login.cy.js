describe('template spec', () => {
  beforeEach(() => {
    // é preciso ter para os testes: Arrange + Act + Assert: estruturar o início, colocar as ações, e fazer asserção, confirmar que o resultado está correto
    cy.visit(Cypress.expose('localUrl'))
    cy.screenshot('apos-visitar-pagina')
  })

  it('debug expose', () => {
  console.log(Cypress.expose())
  console.log(Cypress.expose('prodUrl'))
})

  it('Login com dados validos deve permitir entrada no sistema', () => {
    cy.fixture('credenciais').then(credenciais => { 
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().type(credenciais.valida.senha)
    })
    cy.contains('button', 'Entrar').click()
    cy.screenshot('apos-preencher-dados-validos')

    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })


    it('Login com dados invalidos deve apresentar mensagem de erro', () => {
    // Act
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.invalida.usuario)
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    cy.contains('button', 'Entrar').click()
    cy.screenshot('apos-clicar-botao-entrar')
    
    // Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')

  })

  
})