const DEFAULT_PORT = 3000;

const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const argv = require('minimist')(process.argv.slice(2));
const port = Number(argv.p) || Number(argv.port) || process.env.PORT || DEFAULT_PORT

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'www')));

const router = express.Router();

router.get('*', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, './www/index.html'), {}, (err) => {
    if (err) {
      next(err);
    }
  });
});

app.use('/', router);

app.use((err, req, res) => {
  let errorCode = err.status || 500
  res.status(errorCode);
  res.json({ message: err.message, status: errorCode});
});

const server = http.createServer(app);
server.listen(port);
server.on('listening', () => console.log(`Server listening on port ${port}`));