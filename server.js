/* eslint-disable import/no-extraneous-dependencies, global-require */

const compression = require('compression');
const express = require('express');
const path = require('path');

const app = express();
const port = (process.env.PORT || 8080);
const publicPath = express.static(path.join(__dirname, 'public'));

app.use(compression());
app.use('/public', publicPath);

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const config = require('./webpack.dev.config.js');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
}

app.listen(port);

console.log(`Listening at http://localhost:${port}`);
