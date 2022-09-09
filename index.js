const WebSocket = require('ws')
function Main() {
    const wss = new WebSocket.Server({ port: 1100 })
    wss.on('connection', ws => {
        ws.on('message', message => {
            console.log(`Received message => ${message}`)
            if(message) ws.send('3')
        })
    })
}

Main()