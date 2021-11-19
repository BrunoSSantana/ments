import { PrismaClient } from '.prisma/client'

import { Request, Response } from 'express'

import { AuthenticateMentorService } from './AuthenticateMentorService'

class AuthenticateMentorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const prisma = new PrismaClient()
    const authenticateMentorService = new AuthenticateMentorService(prisma)

    const { email, password } = request.body
    const token = await authenticateMentorService.execute({ email, password })

    return response.json(token)
  }
}

export { AuthenticateMentorController }
