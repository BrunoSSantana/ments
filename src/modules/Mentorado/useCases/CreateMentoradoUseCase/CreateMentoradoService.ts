import { Mentorado, PrismaClient } from '.prisma/client'

import { ICreateMentoradoDTO } from '@modules/Mentorado/dtos/ICreateMentoradoDTO'

class CreateMentoradoService {
  constructor(private repository: PrismaClient) {}
  async execute({
    about,
    email,
    field,
    github,
    languages,
    name,
    linkedin
  }: ICreateMentoradoDTO): Promise<Mentorado> {
    const mentorado = await this.repository.mentorado.create({
      data: { about, email, field, github, languages, name, linkedin }
    })
    return mentorado
  }
}

export { CreateMentoradoService }
