const cache = require('memory-cache');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const Models = require('./Models.js');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 3007;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '/../client/dist')));

// configure cache middleware
let memCache = new cache.Cache();
let cacheMiddleware = duration => {
  return (req, res, next) => {
    let key = '__express__' + req.originalUrl || req.url;
    let cacheContent = memCache.get(key);
    if (cacheContent) {
      res.send(cacheContent);
      return;
    } else {
      res.sendResponse = res.send;
      res.send = body => {
        memCache.put(key, body, duration * 1000);
        res.sendResponse(body);
      };
      next();
    }
  };
};

app.get('/items', cacheMiddleware(30), (req, res) => {
  Models.retrieveAll(req, res);
});

app.get('/items/:id', cacheMiddleware(30), (req, res) => {
  Models.retrieveOne(req, res);
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

module.exports = app;
