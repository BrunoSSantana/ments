import { Mentorado, PrismaClient } from '.prisma/client'

class ListAllMentoradosService {
  constructor(private repository: PrismaClient) {}
  async execute(): Promise<Mentorado[]> {
    const mentorados = await this.repository.mentorado.findMany()
    return mentorados
  }
}

export { ListAllMentoradosService }
