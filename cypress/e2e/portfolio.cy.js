describe('Subhadeep Portfolio Site', () => {
  const siteUrl = 'https://subhadeeps91.github.io/'

  beforeEach(() => {
    cy.visit(siteUrl)
    cy.log('Visiting portfolio site')
  })

  it('should display the portfolio title, site label, and name', () => {
    // Check the <title> tag in the browser tab
    cy.title().should('include', 'Subhadeep Sarkar')

    // Check the visible "My Portfolio" label in the header/nav
    cy.contains('My Portfolio').should('be.visible')

    // Check your name is visible somewhere on the page
    cy.contains('Subhadeep Sarkar').should('be.visible')
  })

  it('should render major portfolio sections', () => {
    ['Work Experience', 'Projects', 'Education', 'Tools & Skills', 'Contact'].forEach(sectionTitle => {
      cy.contains('h2', sectionTitle).should('be.visible')
    })
  })

  it('should display profile and cover images', () => {
    cy.get('header img[alt="Cover image"]').should('be.visible')
    cy.get('header img[alt="Profile picture"]').should('be.visible')
  })

  it('should validate contact links', () => {
    cy.get('a[href*="linkedin"]').should('have.attr', 'target', '_blank')
    cy.get('a[href*="github"]').should('exist')
  })
})
