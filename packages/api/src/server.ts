import express, { Express, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { config } from 'dotenv'
import authRoutes from './routes/auth'
import courseRoutes from './routes/courses'
import userRoutes from './routes/users'
import chatRoutes from './routes/chat'

config()

const app: Express = express()
const PORT = process.env.API_PORT || 4000

// Middleware
app.use(helmet())
app.use(cors({
  origin: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  credentials: true,
}))
app.use(morgan('dev'))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// API Routes
app.get('/api', (req: Request, res: Response) => {
  res.json({ 
    message: 'Academic AI API',
    version: '0.1.0',
    endpoints: [
      'GET /health',
      'GET /api',
      'POST /api/auth/signup',
      'POST /api/auth/login',
      'POST /api/auth/logout',
      'GET /api/courses',
      'GET /api/users/me',
      'POST /api/chat',
    ]
  })
})

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/courses', courseRoutes)
app.use('/api/users', userRoutes)
app.use('/api/chat', chatRoutes)

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Route not found' })
})

// Error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err)
  res.status(err.status || 500).json({ 
    error: err.message || 'Internal server error' 
  })
})

app.listen(PORT, () => {
  console.log(`🚀 API running on http://localhost:${PORT}`)
  console.log(`📝 Documentation: http://localhost:${PORT}/api`)
})

export default app
