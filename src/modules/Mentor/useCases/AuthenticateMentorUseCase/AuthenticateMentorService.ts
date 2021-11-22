import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import { AppError } from '../../../../errors/AppErrors'
import { IMentorsRepositories } from '../../../../repositories/IMentorsRepositories'

interface IAuthenticateMentorDTO {
  email: string
  password: string
}

class AuthenticateMentorService {
  constructor(private mentorsRepository: IMentorsRepositories) {}
  async execute({ email, password }: IAuthenticateMentorDTO): Promise<string> {
    const user = await this.mentorsRepository.findByemail(email)

    if (!user) {
      throw new AppError('Email/Password incorrect')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError('Email/Password incorrect')
    }

    const token = sign({ email: user.email }, process.env.SECRET_KEY, {
      expiresIn: '1d'
    })
    return token
  }
}

export { AuthenticateMentorService }
