import { Request, Response } from 'express'

import { AddMentoredService } from './AddMentoredService'

class AddMentoredController {
  constructor(private addMentoredService: AddMentoredService) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { mentorEmail, mentoredEmail } = request.body

    const mentor = await this.addMentoredService.execute({
      mentorEmail,
      mentoredEmail
    })
    return response.json(mentor)
  }
}

export { AddMentoredController }
