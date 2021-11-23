import { Mentored } from '../../../../entities/Mentored'
import { IMentoredsRepositories } from '../../../../repositories/IMentoredsRepositories'
import { MentoredsRepositoryInMemory } from '../../../../repositories/in-memory/MentoredsRepositoryInMemory'
import { CreateMentoredService } from '../CreateMentoredUseCase/CreateMentoredService'
import { ListAllMentoredsService } from './ListAllMentoredsService'

describe('List Mentoreds', () => {
  let mentoredsRepositoryInMemory: IMentoredsRepositories
  let createMentorService: CreateMentoredService
  let listAllMentoredsService: ListAllMentoredsService

  beforeAll(() => {
    mentoredsRepositoryInMemory = new MentoredsRepositoryInMemory()
    createMentorService = new CreateMentoredService(mentoredsRepositoryInMemory)
    listAllMentoredsService = new ListAllMentoredsService(
      mentoredsRepositoryInMemory
    )
  })

  it('should be able list all mentoreds registered', async () => {
    const mentoredData: Mentored = Mentored.create({
      name: 'Test Name Mentored',
      password: 'passwordTestMentored',
      email: 'test_mentored@test.com',
      github: 'https://github.com/GitTestMentored',
      linkedin: 'in/LinkedinTestMentored',
      about: 'About Test Mentored sample text',
      field: 'Tests Mentored',
      languages: ['Typescript']
    })
    await createMentorService.execute(mentoredData)
    const mentoreds = await listAllMentoredsService.execute()

    expect(mentoreds).toHaveLength(1)
  })
})
