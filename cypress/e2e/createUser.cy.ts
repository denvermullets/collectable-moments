describe("new user sign up w/post", () => {
  it("passes", () => {
    const randomNumber = Math.random() * 2.5;
    const firstMoment = "This is my first moment for today!";

    cy.visit("/");

    cy.contains("wherever you are");
    cy.get('[data-cy="get-started"]').click();

    cy.url().should("include", "/sign-up");

    // since we're using 2 different repos i can't pre-seed the db each time
    // i think this is ok for now, even though it looks super gauche
    // could opt to intercept calls w/MSW for just creation of accounts
    cy.get("input[name=email]").type(`jason-${randomNumber}@jason.com`);
    cy.get("input[name=username]").type(`sudeikis-${randomNumber}`);
    cy.get("input[name=password]").type("password");
    cy.get('[data-cy="create-account"]').click();

    cy.url().should("include", "/");

    cy.get('[data-cy="moment-input"]').type(firstMoment);
    cy.get('[data-cy="moment-submit"]').click();
    cy.contains(firstMoment);
  });
});
