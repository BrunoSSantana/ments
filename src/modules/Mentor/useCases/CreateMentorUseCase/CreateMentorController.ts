import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

import { CreateMentorService } from './CreateMentorService'

export class CreateMentorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const prisma = new PrismaClient()
    const createMentorService = new CreateMentorService(prisma)

    const {
      about,
      email,
      password,
      field,
      github,
      languages,
      linkedin,
      m_max,
      name
    } = request.body

    const mentor = await createMentorService.execute({
      about,
      email,
      password,
      field,
      github,
      languages,
      linkedin,
      m_max,
      name
    })

    return response.json(mentor)
  }
}
