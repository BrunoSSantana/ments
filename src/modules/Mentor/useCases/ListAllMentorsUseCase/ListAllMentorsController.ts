import { PrismaClient } from '.prisma/client'

import { Request, Response } from 'express'

import { ListAllMentorsService } from './ListAllMentorsService'

class ListAllMentorsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const prisma = new PrismaClient()
    const listAllMentorsService = new ListAllMentorsService(prisma)

    const allMentors = await listAllMentorsService.execute()
    return response.json(allMentors)
  }
}

export { ListAllMentorsController }
