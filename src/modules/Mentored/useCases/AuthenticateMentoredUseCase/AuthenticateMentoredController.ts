import { Request, Response } from 'express'

import { AuthenticateMentoredService } from './AuthenticateMentoredService'

class AuthenticateMentoredController {
  constructor(private authenticateMentored: AuthenticateMentoredService) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body
    const token = await this.authenticateMentored.execute({ email, password })

    return response.json({ token })
  }
}

export { AuthenticateMentoredController }
