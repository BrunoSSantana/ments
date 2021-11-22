import { PrismaClient } from '.prisma/client'

import { Request, Response } from 'express'

import { CreateMentoredService } from './CreateMentoredService'

class CreateMentoredController {
  constructor(private createMentored: CreateMentoredService) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { about, email, password, field, github, languages, name, linkedin } =
      request.body

    const mentorado = await this.createMentored.execute({
      about,
      email,
      password,
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
