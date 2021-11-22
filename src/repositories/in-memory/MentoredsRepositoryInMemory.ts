import { v4 as uuid } from 'uuid'

import { Mentored } from '../../entities/Mentored'
import { IMentoredsRepositories } from '../../repositories/IMentoredsRepositories'

class MentoredsRepositoryInMemory implements IMentoredsRepositories {
  private mentoreds: Mentored[] = []

  async create(mentored: Mentored): Promise<Mentored> {
    Object.assign(mentored, {
      id: uuid()
    })
    this.mentoreds.push(mentored)
    return mentored
  }
  async exists(email: string): Promise<boolean> {
    const mentored = this.mentoreds.some(mentored => mentored.email === email)
    return !!mentored
  }
  async findAll(): Promise<Mentored[]> {
    return this.mentoreds
  }
  async findByemail(email: string): Promise<Mentored> {
    const mentored = this.mentoreds.find(mentored => mentored.email === email)
    return mentored
  }
}

export { MentoredsRepositoryInMemory }
