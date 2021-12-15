import { v4 as uuid } from 'uuid'

import { User } from '../../entities/User'
import { IUsersRepositories } from '../IUsersRepositories'

class MentorsRepositoryInMemory implements IUsersRepositories {
  private mentors: User[] = []

  async create(user: User): Promise<User> {
    Object.assign(user, {
      id: uuid()
    })
    this.mentors.push(user)
    return user
  }
  async exists(email: string): Promise<boolean> {
    const user = this.mentors.some(user => user.email === email)
    return !!user
  }
  async findAll(): Promise<User[]> {
    return this.mentors
  }
  async findByemail(email: string): Promise<User> {
    const user = this.mentors.find(user => user.email === email)
    return user
  }
}

export { MentorsRepositoryInMemory }
