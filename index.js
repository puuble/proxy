const ProxyChain = require("proxy-chain");

const server = new ProxyChain.Server({
  port: 8000,
  host: "localhost",
  verbose: true,
  prepareRequestFunction: ({ request, username, password, hostname, port, isHttp, connectionId }) => {
    return {
      // If set to true, the client is sent HTTP 407 resposne with the Proxy-Authenticate header set,
      // requiring Basic authentication. Here you can verify user credentials.
      requestAuthentication: username !== "bob" || password !== "TopSecret",

      // Sets up an upstream HTTP proxy to which all the requests are forwarded.
      // If null, the proxy works in direct mode, i.e. the connection is forwarded directly
      // to the target server. This field is ignored if "requestAuthentication" is true.
      // The username and password must be URI-encoded.
      upstreamProxyUrl: null,

      // If "requestAuthentication" is true, you can use the following property
      // to define a custom error message to return to the client instead of the default "Proxy credentials required"
      failMsg: "Bad username or password, please try again.",

      // Optional custom tag that will be passed back via
      // `tunnelConnectResponded` or `tunnelConnectFailed` events
      // Can be used to pass information between proxy-chain
      // and any external code or application using it
      customTag: { userId: "123" },
    };
  },
});

server.listen(() => {
  console.log(`Proxy server is listening on port ${8000}`);
});
