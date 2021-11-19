import { ICreateMentorDTO } from '@modules/Mentor/dtos/ICreateMentorDTO'
import { Mentor, PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

class CreateMentorService {
  // eslint-disable-next-line prettier/prettier
  constructor(private repository: PrismaClient) { }
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
    const passwordHash = await hash(password, 16)
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
  }
}
export { CreateMentorService }
