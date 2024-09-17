import http from 'http'
import app from './app'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 5000

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

// Handle server errors
server.on('error', (error: NodeJS.ErrnoException) => {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof PORT === 'string' ? 'Pipe ' + PORT : 'Port ' + PORT

  // Handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`)
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`)
      process.exit(1)
      break
    default:
      throw error
  }
})
