const Model = require("./Model.js")

const uniqueFactory = require("objection-unique")

const unique = uniqueFactory({
    fields: ["name"]
})

class BoardGame extends unique(Model) {
    static get tableName() {
        return "boardGames"
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["name", "rating"],
            properties: {
                name: { type: "string" },
                rating: { type: ["string", "integer"]}
            }
        }
    }
}

module.exports = BoardGame