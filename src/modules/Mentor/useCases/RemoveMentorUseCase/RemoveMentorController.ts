import { Request, Response } from 'express'

class RemoveMentorController {
  async handle(request: Request, response: Response): Promise<Response> {
    return response.json()
  }
}

export { RemoveMentorController }
