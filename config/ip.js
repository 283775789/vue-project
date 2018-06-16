// get ipv4 adress
exports.getIp = function () {
  const os = require('os')
  const ifaces = os.networkInterfaces()
  let ip = ''

  for (var dev in ifaces) {
    ifaces[dev].forEach(function (details, alias) {
      if (details.family === 'IPv4' && /^192.168/.test(details.address)) {
        ip = details.address
      }
    })
  }

  return ip
}
