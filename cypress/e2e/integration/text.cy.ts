describe("text component", () => {
  beforeEach(() => cy.visit("/iframe.html?id=text--primary"));

  it("test text", () => {
    cy.contains("h2", "Next.js 13!");
  });
});
