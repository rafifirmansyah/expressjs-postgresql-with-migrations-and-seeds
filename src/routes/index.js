import express from 'express';

import UsersController from '../controllers/UsersController.js';

const router = express.Router();

router.get('/', (req, res) => res.send('ExpressJS PostgreSQL with Migrations!') );
router.get('/users-with-phone-numbers', UsersController.getAllUserWithPhoneNumber);

export default router;