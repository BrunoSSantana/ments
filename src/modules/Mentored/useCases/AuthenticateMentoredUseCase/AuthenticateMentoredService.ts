import { PrismaClient } from '.prisma/client'

import { AppError } from '../../../../errors/AppErrors'

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
    const user = await this.repository.mentored.findFirst({
      where: { email }
    })

    const mentorExist = await this.repository.mentor.findFirst({
      where: { email }
    })

    if (mentorExist) {
      throw new AppError('User already exists!')
    }

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

export { AuthenticateMentoredService }
