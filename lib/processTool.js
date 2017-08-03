const os= require('os');
const pm2wrapper = require('./pm2Tool');

function getOSStats() {
  return {
    hostname: os.hostname(),
    uptime: os.uptime(),
    loadavg: os.loadavg(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
    release: os.release(),
    cpus: os.cpus(),
    networkInterfaces: os.networkInterfaces(),
    arch: os.arch(),
    tmpdir: os.tmpdir(),
    endianness: os.endianness(),
    type: os.type(),
    platform: os.platform()
  };
}

module.exports={
  getOSStats: getOSStats
};
