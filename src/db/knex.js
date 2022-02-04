import knexfile from '../knexfile.js';
import knex from 'knex';

const environment = 'development';
const config = knexfile[environment];
const db = knex(config);

export default db; 