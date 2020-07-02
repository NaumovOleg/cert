const os = require('os');


console.log(
  process.pid,
  // os.arch(),
  // os.constants,
  // os.cpus(),
  os.endianness(),
  os.freemem(),
  os.getPriority(process.pid),
  os.homedir(),
  os.hostname(),
  os.loadavg(),
  // os.networkInterfaces(),
  os.platform(),
  os.release(),
  os.tmpdir(), '\n',
  os.totalmem(),
  os.type(),
  os.uptime(),
  os.userInfo(),

)

os.setPriority(process.pid, 10)
