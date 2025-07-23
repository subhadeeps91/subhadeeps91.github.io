describe('Sanity Check', () => {
  it('opens the portfolio site', () => {
    cy.log('Test has started!')
    cy.visit('https://subhadeeps91.github.io/')
    cy.title().should('exist')
  })
})
