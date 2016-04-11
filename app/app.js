import config from './config/environment'
import Application from 'candycane/dist/foundation/application';

const app = new Application({
  config,
  projectDir: __dirname,
});

app.boot();

export default app;
