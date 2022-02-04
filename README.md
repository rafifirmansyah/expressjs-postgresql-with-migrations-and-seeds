# ExpressJS PostgreSQL with Migrations and Seeds
The ExpressJS PostgreSQL with migrations and seeds using knex (ES6 Style).

## Database Schema
![Database Schema](https://raw.githubusercontent.com/rafifirmansyah/expressjs-postgresql-with-migrations-and-seeds/main/database_schema.png)


## Requirements
* Node JS ^17
* PostreSQL ^13

## Getting Started
1. Install requirements and create your database.
2. Clone this repo.
3. Change directory to cloned repo.
4. npm install
5. Fill src/knexfile.js with your database credential.
6. npx knex migrate:latest --knexfile=src/knexfile.js
7. npx knex seed:run --knexfile=src/knexfile.js
8. done.