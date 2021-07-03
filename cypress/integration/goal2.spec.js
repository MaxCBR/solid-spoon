// goal2.spec.js created with Cypress
describe("Goal2 tests", () => {
  it("tab div and content div have same height regardless of width value", () => {
    cy.visit("http://localhost:4200/goal2");

    //for 10 random width values(1-2159), tab div and content div should have identical height
    for (let index = 0; index < 10; index++) {
      cy.viewport(1 + Math.random() * 2159, 3840);
      cy.get(".tab").then(($tabDiv) => {
        const initialHeight = $tabDiv.outerHeight();
        cy.get(".tabcontent")
          .invoke("outerHeight")
          .should("be.eq", initialHeight);
      });
    }
  });
});
