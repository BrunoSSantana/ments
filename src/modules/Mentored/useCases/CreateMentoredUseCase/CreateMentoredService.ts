import { hash } from 'bcryptjs'

import { Mentored } from '../../../../entities/Mentored'
import { AppError } from '../../../../errors/AppErrors'
import { IMentoredsRepositories } from '../../../../repositories/IMentoredsRepositories'
import { ICreateMentoradoDTO } from '../../dtos/ICreateMentoradoDTO'

class CreateMentoredService {
  constructor(private mentoredsRepository: IMentoredsRepositories) {}
  async execute({
    about,
    password,
    email,
    field,
    github,
    languages,
    name,
    linkedin
  }: ICreateMentoradoDTO): Promise<Mentored> {
    const user = await this.mentoredsRepository.findByemail(email)

    if (user) {
      throw new AppError('Mentored already Exists!')
    }
    const passwordHash = await hash(password, 8)
    const createMentored = Mentored.create({
      about,
      email,
      password: passwordHash,
      field,
      github,
      languages,
      name,
      linkedin
    })

    const mentorado = await this.mentoredsRepository.create(createMentored)
    return mentorado
  }
}

export { CreateMentoredService }
