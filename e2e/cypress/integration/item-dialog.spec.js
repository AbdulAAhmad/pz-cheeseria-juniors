/// <reference types="cypress" />

context("Item Dialog", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Clicking on an item opens a dialog", () => {
    cy.get("[data-cy=item-card-1]").click();

    cy.get(".MuiDialog-paper").should("be.visible");
  });

  it("Clicking on Add to cart does not open dialog", () => {
    cy.get("[data-cy=add-to-cart-1]").click();

    cy.get(".MuiDialog-paper").should("not.exist");
  });
});
