import { PrismaClient } from '.prisma/client'

import { Request, Response } from 'express'

import { AddMentoredService } from './AddMentoredService'

class AddMentoredController {
  async handle(request: Request, response: Response): Promise<Response> {
    const prisma = new PrismaClient()
    const addMentoredService = new AddMentoredService(prisma)

    const { mentorEmail, mentoredEmail } = request.body

    const mentor = await addMentoredService.execute({
      mentorEmail,
      mentoredEmail
    })
    return response.json(mentor)
  }
}

export { AddMentoredController }
