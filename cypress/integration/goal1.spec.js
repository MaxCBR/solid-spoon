// goal1.spec.js created with Cypress

describe("Goal1 tests", () => {
  it("Changes at breakpoint(768px)", () => {
    //can be changed to deployment path by edit Cypress's environment config file
    cy.visit("http://localhost:4200/goal1");
    // cy.visit("http://cbrmax.ddns.net/goal1");

    //when width >=768, css class .buttonTop and content-large should be found
    cy.viewport(768, 1024);
    cy.get(".buttonTop");
    cy.get(".content-large").invoke("height").should("be.eq", 188); //height when width is 768px
    cy.viewport(1080, 1920);
    cy.get(".buttonTop");
    cy.get(".content-large").invoke("height").should("be.eq", 146); //height changes as width changes

    //when click on Item2, Item3 corresponding text should have display="block"
    cy.contains("Item2").click();
    cy.contains("Item2").next().should("have.css", "display", "block");
    cy.contains("Item3").click();
    cy.contains("Item3").next().should("have.css", "display", "block");

    //when width <768, css class .buttonBar .content should be found and content-large should not
    cy.viewport(767, 1024);
    cy.get(".buttonBar");
    cy.get(".content")
      .not("have.class", ".content-large")
      .invoke("height")
      .should("be.eq", 293); //height when width is 767px
    cy.viewport("iphone-6");
    cy.get(".buttonBar");
    cy.get(".content")
      .not("have.class", ".content-large")
      .invoke("height")
      .should("be.eq", 692); //height changes as width changes

    //when click on Item2 and Item3, corresponding text should have display="block"
    cy.contains("Item2").click();
    cy.contains("Item2").next().should("have.css", "display", "block");
    cy.contains("Item3").click();
    cy.contains("Item3").next().should("have.css", "display", "block");
  });
});
