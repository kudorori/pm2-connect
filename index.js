const socket = require('socket.io-client')(process.env.HOST);
const pm2Tool = require("./lib/pm2Tool");
const processTool = require("./lib/processTool");
let timer = null;
socket.on('connect', function(so){
  timer = setInterval(() => {
    const osStats = processTool.getOSStats();
    pm2Tool.list().then((list) => {
      socket.emit("pm2-connect", Object.assign({}, osStats, {processList: list}));
    })
  }, 5000);
});


socket.on("pm2-connect-start", id => pm2Tool.start(id))

socket.on("pm2-connect-stop", id => pm2Tool.stop(id))

socket.on("pm2-connect-restart", id => pm2Tool.restart(id))

socket.on('disconnect', function(){
  clearInterval(timer);
});
