/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

export async function seed(knex) {
    // Deletes ALL existing entries
    await knex('user_phone_numbers').del();

    // Inserts seed entries
    return await knex('user_phone_numbers').insert([
        { id: 1, user_id: 1, phone_number: '17707368031', type: 'home' },
        { id: 2, user_id: 1, phone_number: '17707368035', type: 'office' },
        { id: 3, user_id: 2, phone_number: '0106926593', type: 'home' },
        { id: 4, user_id: 2, phone_number: '0106926563', type: 'office' },
        { id: 5, user_id: 3, phone_number: '14631234487', type: 'home' },
        { id: 6, user_id: 3, phone_number: '14631134447', type: 'office' },
    ]);
};
