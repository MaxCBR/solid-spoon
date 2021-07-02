// goal2.spec.js created with Cypress
describe("Goal2 tests", () => {
  it("changes height when width changes", () => {
    cy.visit("http://localhost:4200/goal2");
    cy.viewport(300, 1080);
    //assuming default tab is active, derived height should be a known value
    cy.get(".tab").invoke("outerHeight").should("be.eq", 844);
    //content div's height and tab div's height are identical
    cy.get(".tabcontent").invoke("outerHeight").should("be.eq", 844);

    //width changes
    cy.viewport(893, 1080);
    cy.get(".tab").invoke("outerHeight").should("be.eq", 273);
    cy.get(".tabcontent").invoke("outerHeight").should("be.eq", 273);

    //width changes, when screen is wide enough to present content, height should not be smaller than minimum tab div height
    cy.viewport(1666, 1080);
    cy.get(".tab").invoke("outerHeight").should("be.eq", 212.796875);
    cy.get(".tabcontent").invoke("outerHeight").should("be.eq", 212.796875);

    //as width increase more, height should not change
    cy.viewport(1920, 1080);
    cy.get(".tab").invoke("outerHeight").should("be.eq", 212.796875);
    cy.get(".tabcontent").invoke("outerHeight").should("be.eq", 212.796875);
  });
});
