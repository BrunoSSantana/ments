import { ICreateMentorDTO } from '@modules/Mentor/dtos/ICreateMentorDTO'
import { Mentor, PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

import { AppError } from '../../../../errors/AppErrors'

class CreateMentorService {
  constructor(private repository: PrismaClient) {}
  async execute({
    about,
    email,
    password,
    field,
    github,
    languages,
    linkedin,
    m_max,
    name
  }: ICreateMentorDTO): Promise<Mentor> {
    try {
      const mentorExist = await this.repository.mentor.findFirst({
        where: { email }
      })

      if (mentorExist) {
        throw new AppError('User already exists!')
      }
      const passwordHash = await hash(password, 8)

      const mentor = await this.repository.mentor.create({
        data: {
          about,
          email,
          password: passwordHash,
          field,
          github,
          m_max,
          name,
          languages,
          linkedin
        }
      })

      return mentor
    } catch (error) {
      console.log(error)
    }
  }
}
export { CreateMentorService }
