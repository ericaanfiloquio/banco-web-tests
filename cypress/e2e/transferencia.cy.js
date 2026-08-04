describe('Transferencias', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.loginValidCredentials()
    })

    it('Deve transferir quando informo dados e valor válidos', () => {
        cy.realizarTransferencias('Maria Oliveira', 'João da Silva', '11')

        cy.verificarToast('Transferência realizada!')
        
    })

    it('Deve apresentar erro quando tentar transferir acima de 5 mil sem token', () => {
        cy.realizarTransferencias('Maria Oliveira', 'João da Silva', '6000')

        cy.verificarToast('Autenticação necessária para transferências acima de R$5.000,00.')

    })

})