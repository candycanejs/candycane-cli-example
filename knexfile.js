// Update with your config settings.

var config = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'blog-test',
      user:     process.env.USER,
      password: '',
    }
  },
};

if (process.env.DATABASE_URL) {
  config.database.connection = process.env.DATABASE_URL;
}

module.exports = config;
