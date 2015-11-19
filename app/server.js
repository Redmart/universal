import express from 'express'
import renderOnServer from './core/renderOnServer'

const server = express()

server.use('/static', express.static(__dirname + '/../dist'));
server.use((req, res) => {
  const { originalUrl } = req
  const query = originalUrl.split('/').pop()
  renderOnServer(res, originalUrl, query)
})

server.listen(9000)
