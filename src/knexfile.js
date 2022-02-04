const knexfile = {
    development: {
        client: 'pg',
        connection: {
            database: '',
            user: '',
            password: '',
            host: '',
            port: '',
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