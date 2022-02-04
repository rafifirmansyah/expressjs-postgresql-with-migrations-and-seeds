import Users from '../models/Users.js';

const UsersController = {
    async getAllUserWithPhoneNumber(req, res) {
        const users = await Users.getAllUserWithPhoneNumber();

        return res.status(200).json(users.rows);
    }
};

export default UsersController;