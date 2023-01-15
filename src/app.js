const helmet = require('helmet');
const http = require('http');
const express = require('express');
const sequelize = require('./db/sequelize');
const routers = require('./routers');
const globalErrHandler = require('./appError/globalErrHandler');

const app = express();

const server = http.createServer(app);

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use((req, res, next) => {
  if (req.headers.origin == 'http://localhost:3000') {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  }
  res.header('Access-Control-Allow-Methods', 'GET,PATCH,POST,DELETE,PUT');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.use(
  express.json({
    limit: '10mb',
  })
);

for (let router of routers) {
  app.use(router);
}

app.use(globalErrHandler);

module.exports = {
  sequelize,
  server,
};
