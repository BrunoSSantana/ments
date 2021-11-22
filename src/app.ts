import 'dotenv'
import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'

import { AppError } from './errors/AppErrors'
import { routes } from './routes'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api', routes)

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message
      })
    }
    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`
    })
  }
)
export { app }
