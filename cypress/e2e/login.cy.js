describe('template spec', () => {
  beforeEach(() => {
    // é preciso ter para os testes: Arrange + Act + Assert: estruturar o início, colocar as ações, e fazer asserção, confirmar que o resultado está correto
    cy.visit('/')
    cy.screenshot('apos-visitar-pagina')
  })

  it('debug expose', () => {
  console.log(Cypress.expose())
  console.log(Cypress.expose('prodUrl'))
})

  it('Login com dados validos deve permitir entrada no sistema', () => {
    cy.loginValidCredentials()
    cy.screenshot('apos-preencher-dados-validos')

    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })


    it('Login com dados invalidos deve apresentar mensagem de erro', () => {
    // Act
    cy.loginInvalidCredentials()
    cy.screenshot('apos-clicar-botao-entrar')
    
    // Assert
    cy.verificarToast('Erro no login. Tente novamente.')
  })

  
})