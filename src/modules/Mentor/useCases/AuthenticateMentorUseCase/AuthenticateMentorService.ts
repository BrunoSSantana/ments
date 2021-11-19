import { PrismaClient } from '.prisma/client'

import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface IAuthenticateMentorDTO {
  email: string
  password: string
}

class AuthenticateMentorService {
  constructor(private repository: PrismaClient) {}
  async execute({ email, password }: IAuthenticateMentorDTO): Promise<string> {
    const user = await this.repository.mentor.findFirst({ where: { email } })

    if (!user) {
      throw new Error('Email/Password incorrect')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('Email/Password incorrect')
    }
    const token = sign({ email: user.email }, process.env.SECRET_KEY, {
      expiresIn: '1d'
    })
    return token
  }
}

export { AuthenticateMentorService }
