describe("Welcome Screen", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("app_url"));
  });

  it("should show input if no name has been provided on the first visit", () => {
    cy.get('[data-testid="name-input"]').should("exist");
  });

  it("should disable play button if no name has been provided", () => {
    cy.clearLocalStorage().then(() => {
      cy.get('[data-testid="play-button"]').should("be.disabled");
    });
  });

  it("should display the name if it has been provided in the input", () => {
    cy.get('[data-testid="name-input"]').type("John Doe");
    cy.get('[data-testid="save-name-button"]').click();
    cy.get('[data-testid="name-input"]').should("not.exist");
    cy.get('[data-testid="play-button"]').should("not.be.disabled");
  });

  it("should display the name if the name is already saved", () => {
    window.localStorage.setItem("name", "John Doe");

    cy.get('[data-testid="name-input"]').should("not.exist");
    cy.get('[data-testid="play-button"]').should("not.be.disabled");
    cy.get('[data-testid="name-display"]').should(
      "have.text",
      "Hello John Doe"
    );
  });

  it("should navigate to the play screen when clicking on the play button", () => {
    cy.get('[data-testid="name-input"]').type("John Doe");
    cy.get('[data-testid="save-name-button"]').click();
    cy.get('[data-testid="play-button"]').click();

    cy.url().should("include", "/play");
  });

  it("should display the input when clicking on the name", () => {
    cy.get('[data-testid="name-input"]').type("John Doe");
    cy.get('[data-testid="save-name-button"]').click();
    cy.get('[data-testid="name-display"]').click();

    cy.get('[data-testid="name-input"]').should("exist");
  });
});
