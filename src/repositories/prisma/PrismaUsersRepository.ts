import { prisma } from '../../database/client'
import { User } from '../../entities/User'
import { IUsersRepositories } from '../IUsersRepositories'

class PrismaUsersRepository implements IUsersRepositories {
  async create({
    about,
    email,
    password,
    field,
    github,
    name,
    languages,
    linkedin
  }: User): Promise<User> {
    const user = await prisma.user.create({
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

    return user
  }
  async exists(email: string): Promise<boolean> {
    const user = await prisma.user.findFirst({ where: { email } })

    return !!user
  }
  async findAll(): Promise<User[]> {
    const allUsers = await prisma.user.findMany()
    return allUsers
  }
  async findByemail(email: string): Promise<User> {
    const user = await prisma.user.findFirst({ where: { email } })

    return user
  }
}

export { PrismaUsersRepository }
