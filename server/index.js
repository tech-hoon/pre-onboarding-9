const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname + '/db.json'));
const middlewares = jsonServer.defaults({
  static: path.resolve(__dirname + '/../build/'),
});

const PORT = process.env.PORT || 5000;

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is running on localhost:${PORT}`);
});
