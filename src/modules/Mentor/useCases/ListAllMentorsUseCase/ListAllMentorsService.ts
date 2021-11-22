import { Mentor } from '../../../../entities/Mentor'
import { IMentorsRepositories } from '../../../../repositories/IMentorsRepositories'

class ListAllMentorsService {
  constructor(private mentorsRepository: IMentorsRepositories) {}
  async execute(): Promise<Mentor[]> {
    const allMentors = await this.mentorsRepository.findAll()
    return allMentors
  }
}

export { ListAllMentorsService }
