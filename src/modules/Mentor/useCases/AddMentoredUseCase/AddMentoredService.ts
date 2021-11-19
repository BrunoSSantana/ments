import { Mentor, PrismaClient } from '.prisma/client'

interface IAddMentoredDTO {
  mentorId: string
  mentoredId: string
}

class AddMentoredService {
  constructor(private repository: PrismaClient) {}
  async execute({ mentorId, mentoredId }: IAddMentoredDTO): Promise<Mentor> {
    const mentor = await this.repository.mentor.update({
      where: { id: mentorId },
      data: { mentoreds: { connect: { id: mentoredId } } }
    })
    return mentor
  }
}

export { AddMentoredService }
