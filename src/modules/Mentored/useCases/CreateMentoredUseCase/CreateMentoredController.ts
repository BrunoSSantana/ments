import { PrismaClient } from '.prisma/client'

import { Request, Response } from 'express'

import { CreateMentoredService } from './CreateMentoredService'

class CreateMentoredController {
  async handle(request: Request, response: Response): Promise<Response> {
    const prisma = new PrismaClient()
    const createMentoradoService = new CreateMentoredService(prisma)

    const { about, email, field, github, languages, name, linkedin } =
      request.body

    const mentorado = await createMentoradoService.execute({
      about,
      email,
      field,
      github,
      languages,
      name,
      linkedin
    })
    return response.json(mentorado)
  }
}

export { CreateMentoredController }
