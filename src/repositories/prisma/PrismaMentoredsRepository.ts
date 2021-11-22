import { prisma } from 'database/client'
import { Mentored } from 'entities/Mentored'
import { IMentoredsRepositories } from 'repositories/IMentoredsRepositories'

class PrismaMentoredsRepository implements IMentoredsRepositories {
  async create({
    about,
    email,
    password,
    field,
    github,
    name,
    languages,
    linkedin
  }: Mentored): Promise<Mentored> {
    const mentor = await prisma.mentored.create({
      data: {
        about,
        email,
        password,
        field,
        github,
        name,
        languages,
        linkedin
      }
    })

    return mentor
  }
  async exists(email: string): Promise<boolean> {
    const mentor = await prisma.mentored.findFirst({ where: { email } })

    return !!mentor
  }
  async findAll(): Promise<Mentored[]> {
    const allMentors = await prisma.mentored.findMany()
    return allMentors
  }
  async findByemail(email: string): Promise<Mentored> {
    const user = await prisma.mentored.findFirst({ where: { email } })

    return user
  }
}

export { PrismaMentoredsRepository }
