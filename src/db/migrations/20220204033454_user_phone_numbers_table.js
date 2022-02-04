/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema
        .createTable('user_phone_numbers', function(table) {
            table.increments().primary();
            table.integer('user_id').references('id').inTable('users').onDelete('cascade');
            table.string('phone_number', 13).notNullable();
            table.string('type', 50).notNullable();
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.raw('DROP TABLE user_phone_numbers CASCADE');
};
