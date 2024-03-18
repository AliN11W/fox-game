describe("Fox click game", () => {
  beforeEach(() => {
    const sampleBase64Image =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

    cy.intercept("GET", "https://dog.ceo/api/breeds/image/random", {
      body: { message: sampleBase64Image },
    });

    cy.intercept("GET", "https://api.thecatapi.com/v1/images/search?*", {
      body: [{ url: sampleBase64Image }],
    });

    cy.intercept("GET", "https://randomfox.ca/floof/", {
      body: { image: sampleBase64Image },
    });
  });

  it("should redirect to the welcome screen if no name has been provided", () => {
    cy.visit(Cypress.env("app_url") + "/play");
    cy.url().should("include", "/");
  });

  it("should increase the score when clicking on the fox", () => {
    cy.visit("http://localhost:5173/play", {
      onBeforeLoad(window) {
        window.localStorage.setItem("name", "John Doe");
      },
    });

    cy.get('[data-type="fox"]').first().click();
    cy.get('[data-testid="score"]').should("have.text", "1");
  });

  it("should decrease the score when clicking on the dog", () => {
    cy.visit(Cypress.env("app_url") + "/play", {
      onBeforeLoad(window) {
        window.localStorage.setItem("name", "John Doe");
      },
    });

    cy.get('[data-type="dog"]').first().click();
    cy.get('[data-testid="score"]').should("have.text", "-1");
  });

  it("should load new collection after clicking on image", () => {
    cy.visit(Cypress.env("app_url") + "/play", {
      onBeforeLoad(window) {
        window.localStorage.setItem("name", "John Doe");
      },
    });

    const el = cy.get('[data-type="dog"]').first();
    el.click();
    el.should("not.exist");
  });
});
