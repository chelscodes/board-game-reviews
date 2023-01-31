/// <reference types="cypress" />

context("Game Boards Index Page", () => {
    beforeEach(() => {
        cy.task("db:truncate", "BoardGame")

        cy.task("db:insert", {modelName: "BoardGame", json: [
            { name: "Trouble", rating: "7" },
            { name: "Checkers", rating: "4" }
        ]})

        cy.visit(`/boardgames`) 
    })

    context("when viewing the shows index page", () => {
        it("the user can see the first and second board game", () => {
            cy.get(".boardGames")
                .find("li")
                .first()
                .should("have.text", "Trouble")
            
            cy.get(".boardGames")
                .find("p")
                .first()
                .should("have.text", "Rating: 7/10")

            cy.get(".boardGames")
                .find("li")
                .eq(1)
                .should("have.text", "Checkers")

            cy.get(".boardGames")
                .find("p")
                .eq(1)
                .should("have.text", "Rating: 4/10")
        })
    })
})

