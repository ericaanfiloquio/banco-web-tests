Cypress.Commands.add('realizarTransferencias', (contaOrigem, contaDestino, valor) => {
    cy.selectOptionCombobox('conta-origem', contaOrigem)
    cy.selectOptionCombobox('conta-destino', contaDestino)
    cy.get('#valor').type(valor)
    cy.contains('button', 'Transferir').click()
})