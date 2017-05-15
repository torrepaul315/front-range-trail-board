module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'reddit-clone',
    }
  },

  production: {
    client: 'pg',
    connection: {
      database:  process.env.DATABASE_URL || 'reddit-clone-test',
    }
  }

};
