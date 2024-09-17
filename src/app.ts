import express from 'express'
import connectDB from './config/dbConfig'
import userRoutes from './routes/userRoutes'
import errorHandler from './middlewares/errorHandler'

const app = express()

// Connect to MongoDB
connectDB()

// Middleware to parse JSON
app.use(express.json())

// Root endpoint to serve dummy data
app.get('/', (req, res) => {
  res.json(`Root end point,${req.url}`)
})

// Routes
app.use('/', userRoutes)

// Error handling middleware
app.use(errorHandler)

export default app
