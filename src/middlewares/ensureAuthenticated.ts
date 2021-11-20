import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
  email: string
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Response | void {
  const token = request.headers.authorization.split(' ')[1]

  if (!token) {
    return response.status(401).end()
  }

  try {
    const { email } = verify(token, process.env.SECRET_KEY) as IPayload

    request.user_email = email

    next()
  } catch (error) {
    return response.status(401).end()
  }
}
