const WebSocket = require('ws');

var port = process.env.PORT || 8080

const wss = new WebSocket.Server({ port });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);

    if (message.toLowerCase() === "ping") {
        ws.send("pong");
    } else {
        ws.send(message);
    }

  });
});