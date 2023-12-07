const ProxyChain = require("proxy-chain");

const server = new ProxyChain.Server({
  port: 80,
  host: "localhost",
  verbose: true,
});

server.listen(() => {
  console.log(`Proxy server is listening on port ${8000}`);
});
