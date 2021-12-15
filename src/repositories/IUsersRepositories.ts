import { User } from 'entities/User'

interface IUsersRepositories {
  create(mentor: User): Promise<User>
  exists(email: string): Promise<boolean>
  findAll(): Promise<User[]>
  findByemail(email: string): Promise<User>
}

export { IUsersRepositories }
