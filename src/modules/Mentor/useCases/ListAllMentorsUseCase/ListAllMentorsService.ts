import { Mentor, PrismaClient } from '.prisma/client'

class ListAllMentorsService {
  constructor(private repository: PrismaClient) {}
  async execute(): Promise<Mentor[]> {
    const allMentors = await this.repository.mentor.findMany()
    return allMentors
  }
}

export { ListAllMentorsService }
