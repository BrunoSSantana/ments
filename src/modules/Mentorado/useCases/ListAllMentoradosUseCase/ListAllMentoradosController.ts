import { PrismaClient } from '.prisma/client'

import { Request, Response } from 'express'

import { ListAllMentoradosService } from './ListAllMentoradosService'

class ListAllMentoradosController {
  async handle(request: Request, response: Response): Promise<Response> {
    const prisma = new PrismaClient()
    const listAllMentoradosService = new ListAllMentoradosService(prisma)

    const mentorados = await listAllMentoradosService.execute()
    return response.json(mentorados)
  }
}

export { ListAllMentoradosController }
