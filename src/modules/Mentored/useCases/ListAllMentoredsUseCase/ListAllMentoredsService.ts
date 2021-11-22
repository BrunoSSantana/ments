import { Mentored } from '../../../../entities/Mentored'
import { IMentoredsRepositories } from '../../../../repositories/IMentoredsRepositories'

class ListAllMentoredsService {
  constructor(private mentoredsRepository: IMentoredsRepositories) {}
  async execute(): Promise<Mentored[]> {
    const Mentoreds = await this.mentoredsRepository.findAll()
    return Mentoreds
  }
}

export { ListAllMentoredsService }
