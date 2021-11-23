import { Mentor } from '../../../../entities/Mentor'
import { IMentorsRepositories } from '../../../../repositories/IMentorsRepositories'
import { MentorsRepositoryInMemory } from '../../../../repositories/in-memory/MentorsRepositoryInMemory'
import { CreateMentorService } from '../CreateMentorUseCase/CreateMentorService'
import { ListAllMentorsService } from './ListAllMentorsService'

describe('List Mentors', () => {
  let mentorsRepositoryInMemory: IMentorsRepositories
  let createMentorService: CreateMentorService
  let listAllMentorsService: ListAllMentorsService

  beforeAll(() => {
    mentorsRepositoryInMemory = new MentorsRepositoryInMemory()
    createMentorService = new CreateMentorService(mentorsRepositoryInMemory)
    listAllMentorsService = new ListAllMentorsService(mentorsRepositoryInMemory)
  })

  it('should be able list all mentors registered', async () => {
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
    await createMentorService.execute(mentorData)
    const mentors = await listAllMentorsService.execute()

    expect(mentors).toHaveLength(1)
  })
})
