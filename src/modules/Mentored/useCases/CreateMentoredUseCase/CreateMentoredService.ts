import { Mentored, PrismaClient } from '.prisma/client'

import { ICreateMentoradoDTO } from '@modules/Mentored/dtos/ICreateMentoradoDTO'

class CreateMentoredService {
  constructor(private repository: PrismaClient) {}
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
    const mentorado = await this.repository.mentored.create({
      data: { about, email, password, field, github, languages, name, linkedin }
    })
    return mentorado
  }
}

export { CreateMentoredService }
