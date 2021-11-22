import { Request, Response } from 'express'

import { ListAllMentorsService } from './ListAllMentorsService'

class ListAllMentorsController {
  constructor(private listAllMentors: ListAllMentorsService) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const allMentors = await this.listAllMentors.execute()
    return response.json(allMentors)
  }
}

export { ListAllMentorsController }
