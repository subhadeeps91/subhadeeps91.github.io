describe('Subhadeep Portfolio Site', () => {
  const siteUrl = 'https://subhadeeps91.github.io/'

  beforeEach(() => {
    cy.visit('https://subhadeeps91.github.io/')
	cy.log('Visiting portfolio site')
  })

  it('should display the portfolio title and name', () => {
    cy.title().should('include', 'My Portfolio')
    cy.contains('Subhadeep Sarkar').should('be.visible')
  })

  it('should render major portfolio sections', () => {
    ['experience', 'projects', 'Education', 'skills', 'contact'].forEach(id => {
      cy.get(`#${id}`).should('be.visible')
    })
  })

  it('should display profile and cover images', () => {
    cy.get('header img[alt="Cover Image"]').should('be.visible')
    cy.get('header img[alt="Profile Picture"]').should('be.visible')
  })

  it('should validate contact links', () => {
    cy.get('a[href*="linkedin"]').should('have.attr', 'target', '_blank')
    cy.get('a[href*="github"]').should('exist')
  })
})
