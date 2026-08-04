Cypress.Commands.add('verifyToastMessage', mensagem => {
    cy.get('.toast').should('have.text', mensagem)
})

Cypress.Commands.add('selectOptionCombobox', (fieldLabel, opcao) => {
    cy.get(`label[for="${fieldLabel}"]`).parent().as(`campo-${fieldLabel}`) //comboBox
    cy.get(`@campo-${fieldLabel}`).click()
    cy.get(`@campo-${fieldLabel}`).contains(opcao).click()
})