/* eslint-disable import/no-extraneous-dependencies */
const Bcrypt = require("bcrypt");
const unique = require("objection-unique");
const Model = require("./Model");

const saltRounds = 10;

const uniqueFunc = unique({
  fields: ["email", "userName"],
  identifiers: ["id"],
});

class User extends uniqueFunc(Model) {
  static get tableName() {
    return "users";
  }

  static get relationMappings() {
    const {BoardGame} = require("./index")

    return {
      boardGames: {
        relation: Model.HasManyRelation,
        modelClass: BoardGame,
        join: {
          from: "users.id",
          to: "boardGame.userId"
        }
      }
    }
  }
  
  set password(newPassword) {
    this.cryptedPassword = Bcrypt.hashSync(newPassword, saltRounds);
  }

  authenticate(password) {
    return Bcrypt.compareSync(password, this.cryptedPassword);
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["email", "userName"],

      properties: {
        userName: { type: "string" },
        email: { type: "string", pattern: "^\\S+@\\S+\\.\\S+$" },
        cryptedPassword: { type: "string" },
        role: {type: "string"}
      },
    };
  }

  $formatJson(json) {
    const serializedJson = super.$formatJson(json);

    if (serializedJson.cryptedPassword) {
      delete serializedJson.cryptedPassword;
    }

    return serializedJson;
  }
}

module.exports = User;
