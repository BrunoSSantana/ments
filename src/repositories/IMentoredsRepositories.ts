import { Mentored } from 'entities/Mentored'

interface IMentoredsRepositories {
  create(Mentored: Mentored): Promise<Mentored>
  exists(email: string): Promise<boolean>
  findAll(): Promise<Mentored[]>
  findByemail(email: string): Promise<Mentored>
}

export { IMentoredsRepositories }
