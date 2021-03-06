const io = require('socket.io')
const messagingSockets = require('./sockets/messaging')

let socketInstance = null;
const options = {
    cors:{
        origin:'http://localhost:3000'
    }
}

const usersConnected = [];

function initializeSocketServer(httpServer){
    socketInstance = io(httpServer,options)

    socketInstance.on('connection',(socket)=>{
        usersConnected.push({
            id:socket.id
        })

        messagingSockets(io,socket,usersConnected)
    })

    socketInstance.on('disconnected',(id)=>{
        const deleteUserIndex = usersConnected.findIndex(user=>user.id === id);
        usersConnected.splice(deleteUserIndex,1)
    })


}

module.exports = initializeSocketServer;
exports.io = socketInstance