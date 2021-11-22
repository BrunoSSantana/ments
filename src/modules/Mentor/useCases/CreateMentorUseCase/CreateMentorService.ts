import { hash } from 'bcryptjs'
import { IMentorsRepositories } from 'repositories/IMentorsRepositories'

import { Mentor } from '../../../../entities/Mentor'
import { AppError } from '../../../../errors/AppErrors'
import { ICreateMentorDTO } from '../../dtos/ICreateMentorDTO'

class CreateMentorService {
  constructor(private mentorsRepository: IMentorsRepositories) {}
  async execute({
    about,
    email,
    password,
    field,
    github,
    languages,
    linkedin,
    m_max,
    name
  }: ICreateMentorDTO): Promise<Mentor> {
    const mentorExist = await this.mentorsRepository.findByemail(email)

    if (mentorExist) {
      throw new AppError('User already exists!')
    }
    const passwordHash = await hash(password, 8)

    const mentorCreate = Mentor.create({
      about,
      email,
      password: passwordHash,
      field,
      github,
      m_max,
      name,
      languages,
      linkedin
    })
    const mentor = await this.mentorsRepository.create(mentorCreate)

    return mentor
  }
}
export { CreateMentorService }
