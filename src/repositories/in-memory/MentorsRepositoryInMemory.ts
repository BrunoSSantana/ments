import { v4 as uuid } from 'uuid'

import { Mentor } from '../../entities/User'
import { Mentored } from '../../entities/Mentored'
import { IMentorsRepositories } from '../../repositories/IMentorsRepositories'

class MentorsRepositoryInMemory implements IMentorsRepositories {
  private mentors: Mentor[] = []
  async addMentored(
    mentorEmail: string,
    mentoredEmail: string
  ): Promise<Mentor> {
    const mentor = this.mentors.find(mentor => mentor.email === mentorEmail)
    const mentored = Mentored.create({
      name: 'nameExample',
      password: 'passwordExample',
      about: 'aboutExample',
      field: 'fieldExample',
      github: 'githubExample',
      email: mentoredEmail,
      languages: ['lenguagesExample'],
      linkedin: 'linkedinExample',
      mentorId: mentor.id,
      id: uuid()
    })
    mentor.mentored.push(mentored)

    return mentor
  }
  async create(mentor: Mentor): Promise<Mentor> {
    Object.assign(mentor, {
      id: uuid()
    })
    this.mentors.push(mentor)
    return mentor
  }
  async exists(email: string): Promise<boolean> {
    const mentor = this.mentors.some(mentor => mentor.email === email)
    return !!mentor
  }
  async findAll(): Promise<Mentor[]> {
    return this.mentors
  }
  async findByemail(email: string): Promise<Mentor> {
    const mentor = this.mentors.find(mentor => mentor.email === email)
    return mentor
  }
}

export { MentorsRepositoryInMemory }
