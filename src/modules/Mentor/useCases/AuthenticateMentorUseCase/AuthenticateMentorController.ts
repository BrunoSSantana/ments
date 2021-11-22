import { Request, Response } from 'express'

import { AuthenticateMentorService } from './AuthenticateMentorService'

class AuthenticateMentorController {
  constructor(private authenticateMentor: AuthenticateMentorService) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body
    const token = await this.authenticateMentor.execute({ email, password })

    return response.json({ token })
  }
}

export { AuthenticateMentorController }
