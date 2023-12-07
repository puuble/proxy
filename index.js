const ProxyChain = require("proxy-chain");

const server = new ProxyChain.Server({
  port: 8000,
  host: "localhost",
  verbose: true,
});

server.listen(() => {
  console.log(`Proxy server is listening on ports asdadas sdass adsa ${8000}`);
});
