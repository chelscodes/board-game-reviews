
const Model = require("./Model.js")

const uniqueFactory = require("objection-unique")

const unique = uniqueFactory({
	fields: ["name"]
})

class BoardGame extends unique(Model) {
	static get tableName() {
		return "boardGames"
	}

  static get relationMappings() {
		const { Review, User } = require("./index")

		return {
			reviews: {
				relation: Model.HasManyRelation,
				modelClass: Review,
				join: {
					from: "boardGames.id",
					to: "reviews.boardGameId"
				}
			}, 
			
			user: {
				relation: Model.BelongsToOneRelation,
				modelClass: User,
				join: {
					from: "boardGame.userId",
					to: "users.id"
				}
			}
		}
	}

  static get jsonSchema() {
		return {
			type: "object",
			required: ["name", "minPlayers", "maxPlayers", "estimatedPlayTime", "description"],
			properties: {
				name: { type: "string" },
				minPlayers: { type: ["string", "integer"] },
				maxPlayers: { type: ["string", "integer"] }, 
				estimatedPlayTime: { type: ["string", "integer"] }, 
				description: { type: "string" }
			}
		}
  }
}

module.exports = BoardGame