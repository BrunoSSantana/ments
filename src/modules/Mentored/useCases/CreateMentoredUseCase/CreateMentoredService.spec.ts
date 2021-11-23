import { Mentored } from '../../../../entities/Mentored'
import { AppError } from '../../../../errors/AppErrors'
import { IMentoredsRepositories } from '../../../../repositories/IMentoredsRepositories'
import { MentoredsRepositoryInMemory } from '../../../../repositories/in-memory/MentoredsRepositoryInMemory'
import { CreateMentoredService } from './CreateMentoredService'

describe('Create Mentored', () => {
  let mentoredsRepositoryInMemory: IMentoredsRepositories
  let createMentoredService: CreateMentoredService

  beforeAll(() => {
    mentoredsRepositoryInMemory = new MentoredsRepositoryInMemory()
    createMentoredService = new CreateMentoredService(
      mentoredsRepositoryInMemory
    )
  })

  it('should be able to create to create a new mentored', async () => {
    const mentoredData: Mentored = {
      name: 'Test Name',
      password: 'passwordTest',
      email: 'email_test@testmail.com',
      github: 'https://github.com/GitTest',
      linkedin: 'in/LinkedinTest',
      about: 'About Test sample text',
      field: 'Tests',
      languages: ['Jest']
    }
    const mentored = await createMentoredService.execute(mentoredData)

    expect(mentored).toHaveProperty('id')
  })

  it('should not be able to create to create an existing mentor', async () => {
    const mentoredData: Mentored = {
      name: 'Test Existing Name',
      password: 'passwordExistingTest',
      email: 'testMentorExisting@test.com',
      github: 'https://github.com/GitTestExisting',
      linkedin: 'in/LinkedinTestExisting',
      about: 'About Test sample text existing',
      field: 'Tests Existing',
      languages: ['Jest']
    }

    await createMentoredService.execute(mentoredData)

    await expect(createMentoredService.execute(mentoredData)).rejects.toEqual(
      new AppError('Mentored already Exists!')
    )
  })
})
