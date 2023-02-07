/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("reviews", (table) => {
    table.bigIncrements("id")
    table.integer("rating").notNullable()
    table.string("comment").notNullable()
    table.bigInteger("userId")
      .unsigned().notNullable().index()
      .references("users.id")
    table.bigInteger("boardGameId")
      .unsigned().notNullable().index()
      .references("boardGames.id")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("reviews")
}
