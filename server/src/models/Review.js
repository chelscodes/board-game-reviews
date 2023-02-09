const Model = require("./Model")

class Review extends Model {
  static get tableName() {
    return "reviews"
  }

  static get relationMappings() {
    const { User, BoardGame } = require("./index")

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "reviews.userId",
          to: "users.id"
        }
      },

      boardGame: {
        relation: Model.BelongsToOneRelation,
        modelClass: BoardGame,
        join: {
          from: "reviews.boardGameId",
          to: "boardGames.id"
        }
      }
    }
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["rating", "comment"],
      properties: {
        rating: { type: ["integer", "string" ]},
        comment: { type: "string" }
      }
    }
  }
}

module.exports = Review