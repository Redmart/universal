require('babel/register')({ stage: 0 })
global.__SERVER__ = true
require('./app/server.js')
