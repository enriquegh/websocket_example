const fs = require('fs');
const https = require('https');
const WebSocket = require('ws');

var port = process.env.PORT || 8080
var cert_path = process.env.CERT_PATH
var key_path = process.env.KEY_PATH

const server = https.createServer({
    cert: fs.readFileSync(cert_path),
    key: fs.readFileSync(key_path)
  });

const wss = new WebSocket.Server({ server });

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

server.listen(port);