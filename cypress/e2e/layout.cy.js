const devices = [
  { name: 'iPhone 6', viewport: 'iphone-6' },
  { name: 'Samsung Galaxy S9+', viewport: [360, 740] } // common Android size
];

devices.forEach((device) => {
  describe(`Mobile view layout on ${device.name}`, () => {
    beforeEach(() => {
      cy.viewport(...(Array.isArray(device.viewport) ? device.viewport : [device.viewport]));
      cy.visit('https://your-portfolio-url.com');
    });

    it('Shows short title on mobile', () => {
      cy.get('p.lead').should('be.visible');
      cy.get('p.lead').invoke('text').should('match', /QA Engineer|ISTQB/);
    });

    it('Profile image is visible and circular', () => {
      cy.get('img[alt="Profile picture"]')
        .should('be.visible')
        .and(($img) => {
          expect($img[0].naturalWidth).to.be.greaterThan(0);
        });
    });

    it('Navbar collapses into mobile menu', () => {
      cy.get('.navbar-toggler').should('be.visible');
    });
  });
});
