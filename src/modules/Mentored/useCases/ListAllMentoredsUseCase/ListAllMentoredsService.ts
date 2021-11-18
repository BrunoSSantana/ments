import { Mentored, PrismaClient } from '.prisma/client'

class ListAllMentoredsService {
  constructor(private repository: PrismaClient) {}
  async execute(): Promise<Mentored[]> {
    const Mentoreds = await this.repository.mentored.findMany()
    return Mentoreds
  }
}

export { ListAllMentoredsService }
