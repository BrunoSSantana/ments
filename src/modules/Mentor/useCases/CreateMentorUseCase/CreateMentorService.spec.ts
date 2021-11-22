import { Mentor } from '../../../../entities/Mentor'
import { AppError } from '../../../../errors/AppErrors'
import { IMentorsRepositories } from '../../../../repositories/IMentorsRepositories'
import { MentorsRepositoryInMemory } from '../../../../repositories/in-memory/MentorsRepositoryInMemory'
import { CreateMentorService } from './CreateMentorService'

describe('Create Mentor', () => {
  let mentorsRepositoryInMemory: IMentorsRepositories
  let createMentorService: CreateMentorService

  beforeAll(() => {
    mentorsRepositoryInMemory = new MentorsRepositoryInMemory()
    createMentorService = new CreateMentorService(mentorsRepositoryInMemory)
  })

  it('should be able to create to create a new mentor', async () => {
    const mentorData: Mentor = {
      name: 'Test Name',
      password: 'passwordTest',
      email: 'email_test@testmail.com',
      github: 'https://github.com/GitTest',
      linkedin: 'in/LinkedinTest',
      m_max: 5,
      about: 'About Test sample text',
      field: 'Tests',
      languages: ['Jest']
    }
    const mentor = await createMentorService.execute(mentorData)

    expect(mentor).toHaveProperty('id')
  })

  it('should not be able to create to create an existing mentor', async () => {
    const mentorData: Mentor = {
      name: 'Test Existing Name',
      password: 'passwordExistingTest',
      email: 'testMentorExisting@test.com',
      github: 'https://github.com/GitTestExisting',
      linkedin: 'in/LinkedinTestExisting',
      m_max: 4,
      about: 'About Test sample text existing',
      field: 'Tests Existing',
      languages: ['Jest']
    }

    await createMentorService.execute(mentorData)

    await expect(createMentorService.execute(mentorData)).rejects.toEqual(
      new AppError('User already exists!')
    )
  })
})
