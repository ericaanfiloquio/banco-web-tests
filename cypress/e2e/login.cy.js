describe('template spec', () => {
  beforeEach(() => {
    // é preciso ter para os testes: Arrange + Act + Assert: estruturar o início, colocar as ações, e fazer asserção, confirmar que o resultado está correto
    cy.visit('http://localhost:4000')
  })


  it('Login com dados validos deve permitir entrada no sistema', () => {
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.contains('button', 'Entrar').click()

    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })


    it('Login com dados invalidos deve apresentar mensagem de erro', () => {
    // Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123458')
    cy.contains('button', 'Entrar').click()

    // Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')

  })

  
})