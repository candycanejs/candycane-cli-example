import providers from './providers';

const config = {
  providers,

  database: {
    client: 'postgresql',
    connection: {
      database: 'blog-test',
      user:     process.env.USER,
      password: '',
    },
  }
};

export default config;
