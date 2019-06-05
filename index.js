const WebSocket = require('ws');

var port = process.env.PORT || 8080

const wss = new WebSocket.Server({ port }, () => {
    console.log("Server started on port %d", port);
});

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);

        if (message.toLowerCase() === "sauce") {
            ws.send("labs");
        } else {
            ws.send(message);
        }

    });

    ws.on('close', (code, reason) => {
        console.log("Closing connection")
        console.log("  Code: %s Reason: %s", code, reason)
    });
});
