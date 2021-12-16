import { ICreateUserDTO } from '@modules/User/dtos/ICreateUserDTO'
import { Request, Response } from 'express'

import { CreateUserService } from './CreateUserService'

class CreateUserController {
  constructor(private createUser: CreateUserService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      email,
      field,
      github,
      languages,
      name,
      password,
      linkedin,
      about
    }: ICreateUserDTO = request.body
    const user = this.createUser.execute({
      linkedin,
      password,
      name,
      languages,
      github,
      field,
      email,
      about
    })
    return response.json(user)
  }
}

export { CreateUserController }
