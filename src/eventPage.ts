import Murmur from "murmur-client";

const server = new Murmur({
  protocols: ["libp2p"],
  signalServers: ["/dns4/127.0.0.1/tcp/9090/ws/p2p-webrtc-star"],
  bootnodes: []
});

// Listen to messages sent from other parts of the extension.
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // onMessage must return "true" if response is async.
  let isResponseAsync = false;

  if (request.popupMounted) {
    server.start();
    server.onReady(async () => {
      // const web3 = new Web3();
      // web3.setProvider(server.provider);
    
      // Use web3.shh functions here
      console.log('Helloooo');
    });
  }

  return isResponseAsync;
});
