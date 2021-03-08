const io = require('socket.io')
const messagingSockets = require('./sockets/messaging')

let socketInstance = null;
const options = {
    cors:{
        origin:'http://localhost:3000'
    }
}


function initializeSocketServer(httpServer){
    socketInstance = io(httpServer,options)

    socketInstance.on('connection',(socket)=>{
        messagingSockets(socketInstance,socket)
    })

}

module.exports = initializeSocketServer;
exports.io = socketInstance