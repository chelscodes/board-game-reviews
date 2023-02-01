/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.table("boardGames", (table) => {
    table.dropColumn("rating")
    table.integer("minPlayers").notNullable()
    table.integer("maxPlayers").notNullable()
    table.integer("estimatedPlayTime").notNullable()
    table.text("description").notNullable()
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.table("boardGames", (table) => {
    table.integer("rating").notNullable()
    table.dropColumn("minPlayers")
    table.dropColumn("maxPlayers")
    table.dropColumn("estimatedPlayTime")
    table.dropColumn("description")
  })
}
