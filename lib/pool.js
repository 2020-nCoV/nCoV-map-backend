const Pool = require('pg').Pool
const dbconfig = require('../config/index').dbs.defaults

const pool = new Pool({
  user: dbconfig.user,
  host: dbconfig.host,
  database: dbconfig.name,
  password: dbconfig.pass,
  port: dbconfig.port,
})

module.exports = pool