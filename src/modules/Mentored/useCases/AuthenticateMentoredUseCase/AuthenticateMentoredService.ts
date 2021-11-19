import { PrismaClient } from '.prisma/client'

import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface IAuthenticateMentoredDTO {
  email: string
  password: string
}

class AuthenticateMentoredService {
  constructor(private repository: PrismaClient) {}
  async execute({
    email,
    password
  }: IAuthenticateMentoredDTO): Promise<string> {
    try {
      const user = await this.repository.mentored.findFirst({
        where: { email }
      })

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
    } catch (error) {
      console.log(error)
    }
  }
}

export { AuthenticateMentoredService }
