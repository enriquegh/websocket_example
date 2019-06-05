# WebSocket example server

This is a very simple WebSocket server that can be ran to test basic ws functionality.

To easily test the client side, use something like wscat [(link)](https://github.com/websockets/wscat).

## How to install

1. Clone or download repo
2. Run `npm install`

## How to run

1. Run `npm start`

    For debugging you can run something like:

    `NODE_DEBUG=net npm start`

    and this will output debug node net logs

2. If using wscat you can verify this by running:

    `wscat -c ws://127.0.0.1:8080`

## Features

The server should echo whatever message it gets sent.
The only exception is if "sauce" is sent, it will response with "labs".

If you use the wss branch, you should be able to run using wss://