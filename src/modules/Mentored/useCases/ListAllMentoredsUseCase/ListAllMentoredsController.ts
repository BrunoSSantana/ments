import { Request, Response } from 'express'

import { ListAllMentoredsService } from './ListAllMentoredsService'

class ListAllMentoredsController {
  constructor(private listAllMentoreds: ListAllMentoredsService) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const Mentoreds = await this.listAllMentoreds.execute()
    return response.json(Mentoreds)
  }
}

export { ListAllMentoredsController }
