import { Mentor } from '../../../../entities/Mentor'
import { AppError } from '../../../../errors/AppErrors'
import { IMentoredsRepositories } from '../../../../repositories/IMentoredsRepositories'
import { IMentorsRepositories } from '../../../../repositories/IMentorsRepositories'

interface IAddMentoredDTO {
  mentorEmail: string
  mentoredEmail: string
}

class AddMentoredService {
  constructor(
    private mentorsRepository: IMentorsRepositories,
    private mentoredsRepository: IMentoredsRepositories
  ) {}
  async execute({
    mentorEmail,
    mentoredEmail
  }: IAddMentoredDTO): Promise<Mentor | null> {
    const mentor = await this.mentorsRepository.findByemail(mentorEmail)
    // const nOfMentoreds = mentor.mentoreds.length
    // console.log('MENTOR >>', mentor)
    // console.log('MAX >>', max)
    // if (nOfMentoreds >= mentor.m_max) {
    //   throw new AppError('Number of mentees exceeded')
    // }

    const mentored = await this.mentoredsRepository.findByemail(mentoredEmail)

    if (mentored.mentorId) {
      throw new AppError('Existing Mentor')
    }

    const result = await this.mentorsRepository.addMentored(
      mentor.id,
      mentored.id
    )

    return result
  }
}

export { AddMentoredService }
