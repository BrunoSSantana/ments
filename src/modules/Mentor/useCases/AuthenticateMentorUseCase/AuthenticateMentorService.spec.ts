import { Mentor } from '../../../../entities/Mentor'
import { IMentorsRepositories } from '../../../../repositories/IMentorsRepositories'
import { MentorsRepositoryInMemory } from '../../../../repositories/in-memory/MentorsRepositoryInMemory'
import { CreateMentorService } from '../CreateMentorUseCase/CreateMentorService'
import { AuthenticateMentorService } from './AuthenticateMentorService'

describe('Authenticate Mentor', () => {
  let mentorsRepositoryInMemory: IMentorsRepositories
  let createMentorService: CreateMentorService
  let authenticateMentorService: AuthenticateMentorService

  beforeAll(() => {
    mentorsRepositoryInMemory = new MentorsRepositoryInMemory()
    createMentorService = new CreateMentorService(mentorsRepositoryInMemory)
    authenticateMentorService = new AuthenticateMentorService(
      mentorsRepositoryInMemory
    )
  })

  it('should be able to authenticate a mentor registered', async () => {
    const mentorData: Mentor = Mentor.create({
      name: 'Test Name Authenticate',
      password: 'passwordTestAuthenticate',
      email: 'test_authenticate@test.com',
      github: 'https://github.com/GitTestAuthenticate',
      linkedin: 'in/LinkedinTestAuthenticate',
      m_max: 3,
      about: 'About Test Authenticate sample text',
      field: 'Tests Authenticate',
      languages: ['Typescript']
    })
    const { email } = await createMentorService.execute(mentorData)

    const response = await authenticateMentorService.execute({
      email,
      password: 'passwordTestAuthenticate'
    })

    expect(response)
  })
})
