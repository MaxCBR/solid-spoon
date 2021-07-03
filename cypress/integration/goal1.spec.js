// goal1.spec.js created with Cypress

describe("Goal1 tests", () => {
  it("Changes at breakpoint(768px) - AIO", () => {
    //can be changed to deployment path by edit Cypress's environment config file
    cy.visit("http://localhost:4200/goal1");
    // cy.visit("http://cbrmax.ddns.net/goal1");

    //when width >=768, css class .buttonTop and content-large should be found
    cy.viewport(768, 1024);
    cy.get(".buttonTop");
    cy.get(".content-large");
    cy.get(".content-show").then(($div) => {
      //height when width is 768
      const initialHeight = $div.outerHeight();

      //increase width to 768 - 2160, height should shrink
      cy.viewport(768 + Math.random() * 1393, 1920);
      cy.get(".content-show").then(($newDiv) => {
        const newHeight = $newDiv.outerHeight(); //jQuery .outHeight()
        expect(newHeight).to.be.lte(initialHeight);
        cy.get(".buttonTop");
        cy.get(".content-large");
      });
    });

    //when click on Item2, Item3 corresponding text should have display="block"
    cy.contains("Item2").click();
    cy.contains("Item2").next().should("have.css", "display", "block");
    cy.contains("Item3").click();
    cy.contains("Item3").next().should("have.css", "display", "block");

    //when width <768, css class .buttonBar .content should be found and content-large should not
    cy.viewport(767, 1024);
    cy.get(".buttonBar");
    cy.get(".content-show").not("have.class", ".content-large");

    cy.get(".content-show").then(($div) => {
      //height when width is 767
      const initialHeight = $div.outerHeight();

      //shrink width to 0 - 767, height should increase
      cy.viewport(767 - Math.random() * 768, 1920);
      cy.get(".content-show").then(($newDiv) => {
        const newHeight = $newDiv.outerHeight(); //jQuery .outHeight()
        expect(newHeight).to.be.gte(initialHeight);
        cy.get(".buttonBar");
        cy.get(".content").not("have.class", ".content-large");
      });
    });

    //when click on Item2 and Item3, corresponding text should have display="block"
    cy.contains("Item2").click();
    cy.contains("Item2").next().should("have.css", "display", "block");
    cy.contains("Item3").click();
    cy.contains("Item3").next().should("have.css", "display", "block");
  });
});
