import { prisma } from '../../database/client'
import { Mentor } from '../../entities/Mentor'
import { IMentorsRepositories } from '../IMentorsRepositories'

class PrismaMentorsRepository implements IMentorsRepositories {
  async addMentored(mentor_id: string, mentored_id: string): Promise<Mentor> {
    const mentor = await prisma.mentor.update({
      where: { id: mentor_id },
      data: { mentoreds: { connect: { id: mentored_id } } }
    })

    return mentor
  }
  async create({
    about,
    email,
    password,
    field,
    github,
    m_max,
    name,
    languages,
    linkedin
  }: Mentor): Promise<Mentor> {
    const mentor = await prisma.mentor.create({
      data: {
        about,
        email,
        password,
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
  async exists(email: string): Promise<boolean> {
    const mentor = await prisma.mentor.findFirst({ where: { email } })

    return !!mentor
  }
  async findAll(): Promise<Mentor[]> {
    const allMentors = await prisma.mentor.findMany()
    return allMentors
  }
  async findByemail(email: string): Promise<Mentor> {
    const user = await prisma.mentor.findFirst({ where: { email } })

    return user
  }
}

export { PrismaMentorsRepository }
