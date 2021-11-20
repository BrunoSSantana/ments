import { PrismaClient } from '.prisma/client'

import { Request, Response } from 'express'

import { AuthenticateMentoredService } from './AuthenticateMentoredService'

class AuthenticateMentoredController {
  async handle(request: Request, response: Response): Promise<Response> {
    const prisma = new PrismaClient()
    const authenticateMentoredService = new AuthenticateMentoredService(prisma)

    const { email, password } = request.body
    const token = await authenticateMentoredService.execute({ email, password })

    return response.json({ token })
  }
}

export { AuthenticateMentoredController }
