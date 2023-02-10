/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.alterTable("reviews", (table) => {
        table.text("comment").notNullable().alter();
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.alterTable("reviews", (table) => {
        table.string("comment").notNullable().alter();
    })
}
