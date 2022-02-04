const knexfile = {
    development: {
        client: 'pg',
        connection: {
            database: 'expressjs_postgresql_with_migrations',
            user: 'rafi',
            password: 'kepodehlu',
            host: '127.0.0.1',
            port: '5432',
        },
        migrations: {
            directory: 'db/migrations',
        },
        seeds: {
            directory: 'db/seeds',
        },
    },

    staging: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user:     'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    production: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user:     'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }

};

export default knexfile;