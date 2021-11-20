import { Mentor, PrismaClient } from '.prisma/client'

interface IAddMentoredDTO {
  mentorEmail: string
  mentoredEmail: string
}

class AddMentoredService {
  constructor(private repository: PrismaClient) {}
  async execute({
    mentorEmail,
    mentoredEmail
  }: IAddMentoredDTO): Promise<Mentor | null> {
    const mentor = await this.repository.mentor.findFirst({
      where: { email: mentorEmail },
      include: { mentoreds: true, _count: true }
    })
    const nOfMentoreds = mentor.mentoreds.length
    // console.log('MENTOR >>', mentor)
    // console.log('MAX >>', max)
    try {
      if (nOfMentoreds >= mentor.m_max) {
        throw new Error('Number of mentees exceeded')
      }
    } catch (error) {
      console.log(error)
    }

    const mentored = await this.repository.mentored.findFirst({
      where: { email: mentoredEmail }
    })

    if (mentored.mentorId) {
      throw new Error('Existing Mentor')
    }

    const result = await this.repository.mentor.update({
      where: { id: mentor.id },
      data: { mentoreds: { connect: { id: mentored.id } } }
    })

    return result
  }
}

export { AddMentoredService }
