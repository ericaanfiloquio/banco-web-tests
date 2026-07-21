describe('template spec', () => {
  it('Login com dados validos deve permitir entrada no sistema', () => {
    // é preciso ter para os testes: Arrange + Act + Assert: estruturar o início, colocar as ações, e fazer asserção, confirmar que o resultado está correto
    cy.visit('http://localhost:4000')
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.get('#login-section > .btn').click()

    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })
})