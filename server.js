const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./src/data/db.json');
const middlewares = jsonServer.defaults({
  static: './build',
});
server.use(middlewares);
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  })
);

server.use(router);

server.listen(5000, () => {
  console.log('server is running');
});
