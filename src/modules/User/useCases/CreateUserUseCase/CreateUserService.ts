import { AppError } from '@errors/AppErrors'
import { User } from 'entities/User'
import { IUsersRepositories } from 'repositories/IUsersRepositories'

interface IUserRequest {
  about: string
  name: string
  password: string
  email: string
  field: string
  github: string
  languages: string[]
  linkedin?: string
}

class CreateUserService {
  constructor(private usersRepository: IUsersRepositories) {}

  async execute({
    email,
    about,
    field,
    github,
    languages,
    name,
    password,
    linkedin
  }: IUserRequest): Promise<User> {
    const userAlreadyExists = await this.usersRepository.exists(name)

    if (userAlreadyExists) {
      throw new AppError('User already exists!')
    }

    const userCreate = User.create({
      about,
      linkedin,
      password,
      name,
      languages,
      github,
      field,
      email
    })
    const user = await this.usersRepository.create(userCreate)
    return user
  }
}

export { CreateUserService }
