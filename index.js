import express from 'express';
import { ParseServer } from 'parse-server';
import ParseDashboard from 'parse-dashboard';
import path from 'path';
const __dirname = path.resolve();
import http from 'http';
import dotenv from 'dotenv';

import config from './config/index.js';

dotenv.config();

const dashboard = new ParseDashboard(config.DASHBOARD);

export const app = express();

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, '/public')));

// Serve the Parse API on the /parse URL prefix
if (!process.env.TESTING) {
  const mountPath = process.env.PARSE_MOUNT || '/parse';
  const server = new ParseServer(config.PARSE);
  await server.start();
  app.use(mountPath, server.app);
}

// Parse Server plays nicely with the rest of your web routes
app.get('/', function (req, res) {
  res.status(200).send('I dream of being a website.  Please star the parse-server repo on GitHub!');
});

// There will be a test page available on the /test path of your server url
// Remove this before launching your app
app.get('/test', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/test.html'));
});

// make the Parse Dashboard available at /dashboard
app.use('/dashboard', dashboard);

if (!process.env.TESTING) {
  const port = process.env.SERVER_PORT || 1337;
  const httpServer = http.createServer(app);
  httpServer.listen(port, function () {
    console.log(`Parse server is running on port ${port}.`);
  });
  // This will enable the Live Query real-time server
  await ParseServer.createLiveQueryServer(httpServer);
}
