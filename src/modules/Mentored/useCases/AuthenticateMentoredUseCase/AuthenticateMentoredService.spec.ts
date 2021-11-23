import { Mentored } from '../../../../entities/Mentored'
import { IMentoredsRepositories } from '../../../../repositories/IMentoredsRepositories'
import { MentoredsRepositoryInMemory } from '../../../../repositories/in-memory/MentoredsRepositoryInMemory'
import { CreateMentoredService } from '../CreateMentoredUseCase/CreateMentoredService'
import { AuthenticateMentoredService } from './AuthenticateMentoredService'

describe('Authenticate Mentored', () => {
  let mentoredsRepositoryInMemory: IMentoredsRepositories
  let createMentoredService: CreateMentoredService
  let authenticateMentoredService: AuthenticateMentoredService

  beforeAll(() => {
    mentoredsRepositoryInMemory = new MentoredsRepositoryInMemory()
    createMentoredService = new CreateMentoredService(
      mentoredsRepositoryInMemory
    )
    authenticateMentoredService = new AuthenticateMentoredService(
      mentoredsRepositoryInMemory
    )
  })

  it('should be able to authenticate a mentored registered', async () => {
    const mentoredData: Mentored = Mentored.create({
      name: 'Test Name Authenticate',
      password: 'passwordTestAuthenticate',
      email: 'test_authenticate@test.com',
      github: 'https://github.com/GitTestAuthenticate',
      linkedin: 'in/LinkedinTestAuthenticate',
      about: 'About Test Authenticate sample text',
      field: 'Tests Authenticate',
      languages: ['Typescript']
    })
    const { email } = await createMentoredService.execute(mentoredData)

    const response = await authenticateMentoredService.execute({
      email,
      password: 'passwordTestAuthenticate'
    })

    expect(response)
  })
})
