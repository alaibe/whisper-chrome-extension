import Murmur from "murmur-client";

const server = new Murmur({
  protocols: ["libp2p"],
  signalServers: ["/dns4/127.0.0.1/tcp/9090/ws/p2p-webrtc-star"],
  bootnodes: []
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  let isResponseAsync = false;
  console.log("hello")

  if (request.popupMounted) {
    server.start();
    server.onReady(async () => {
      console.log('Helloooo');
    });
  }

  return isResponseAsync;
});
