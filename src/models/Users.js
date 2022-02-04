import db from '../db/knex.js';

const Users = {
    getAllUserWithPhoneNumber() {
        const users = db.raw(`
            SELECT
                u.id, u.name, u.email, upn.phone_number, upn.type AS phone_number_type
            FROM
                users AS u 
            INNER JOIN
                user_phone_numbers AS upn 
            ON 
                u.id = upn.user_id
        `);

        return users;
    }
};

export default Users;