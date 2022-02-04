/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

import bcrypt from 'bcryptjs';

export async function seed(knex) {
    // Deletes ALL existing entries
    await knex('users').del();

    // Inserts seed entries
    return await knex('users').insert([
        {id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz', password: bcrypt.hashSync('helloworld', 10)},
        {id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv', password: bcrypt.hashSync('helloworld', 10)},
        {id: 3, name: 'Clementine Bauch', email: 'Nathan@yesenia.net', password: bcrypt.hashSync('helloworld', 10)},
    ]);
};
