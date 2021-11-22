import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

import { CreateMentorService } from './CreateMentorService'

export class CreateMentorController {
  constructor(private createMentor: CreateMentorService) {}
  async handle(request: Request, response: Response): Promise<Response> {
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

    const mentor = await this.createMentor.execute({
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
    console.log('passou')

    return response.json(mentor)
  }
}
