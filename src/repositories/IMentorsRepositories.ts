import { Mentor } from 'entities/Mentor'

interface IMentorsRepositories {
  addMentored(mentor_id: string, mentored_id: string): Promise<Mentor>
  create(mentor: Mentor): Promise<Mentor>
  exists(email: string): Promise<boolean>
  findAll(): Promise<Mentor[]>
  findByemail(email: string): Promise<Mentor>
}

export { IMentorsRepositories }
