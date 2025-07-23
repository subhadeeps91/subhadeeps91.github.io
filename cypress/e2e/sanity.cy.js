describe('Sanity Check', () => {
  it('opens the portfolio site', () => {
    cy.log('Test has started!')
    cy.visit('https://example.com')
    cy.title().should('exist')
  })
})
