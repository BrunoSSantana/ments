import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import { AppError } from '../../../../errors/AppErrors'
import { IMentoredsRepositories } from '../../../../repositories/IMentoredsRepositories'

interface IAuthenticateMentoredDTO {
  email: string
  password: string
}

class AuthenticateMentoredService {
  constructor(private mentoredRepository: IMentoredsRepositories) {}
  async execute({
    email,
    password
  }: IAuthenticateMentoredDTO): Promise<string> {
    const mentored = await this.mentoredRepository.findByemail(email)

    if (!mentored) {
      throw new AppError('Email/Password incorrect')
    }

    const passwordMatch = await compare(password, mentored.password)

    if (!passwordMatch) {
      throw new AppError('Email/Password incorrect')
    }

    const token = sign({ email: mentored.email }, process.env.SECRET_KEY, {
      expiresIn: '1d'
    })
    return token
  }
}

export { AuthenticateMentoredService }
