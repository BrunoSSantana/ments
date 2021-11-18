import { Mentor, PrismaClient } from '@prisma/client'
import { ICreateMentorDTO } from '@modules/Mentor/dtos/ICreateMentorDTO'

class CreateMentorService {
  // eslint-disable-next-line prettier/prettier
  constructor(private repository: PrismaClient) { }
  async execute({
    about,
    email,
    field,
    github,
    languages,
    linkedin,
    m_max,
    name
  }: ICreateMentorDTO): Promise<Mentor> {
    const mentor = await this.repository.mentor.create({
      data: {
        about,
        email,
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
