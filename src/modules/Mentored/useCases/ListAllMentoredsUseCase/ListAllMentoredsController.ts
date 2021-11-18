import { PrismaClient } from '.prisma/client'

import { Request, Response } from 'express'

import { ListAllMentoredsService } from './ListAllMentoredsService'

class ListAllMentoredsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const prisma = new PrismaClient()
    const listAllMentoredsService = new ListAllMentoredsService(prisma)

    const Mentoreds = await listAllMentoredsService.execute()
    return response.json(Mentoreds)
  }
}

export { ListAllMentoredsController }
