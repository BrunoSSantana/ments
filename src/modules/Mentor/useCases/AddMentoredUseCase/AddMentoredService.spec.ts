import { Mentor } from '../../../../entities/Mentor'
import { Mentored } from '../../../../entities/Mentored'
import { IMentoredsRepositories } from '../../../../repositories/IMentoredsRepositories'
import { IMentorsRepositories } from '../../../../repositories/IMentorsRepositories'
import { MentoredsRepositoryInMemory } from '../../../../repositories/in-memory/MentoredsRepositoryInMemory'
import { MentorsRepositoryInMemory } from '../../../../repositories/in-memory/MentorsRepositoryInMemory'
import { CreateMentoredService } from '../../../Mentored/useCases/CreateMentoredUseCase/CreateMentoredService'
import { CreateMentorService } from '../CreateMentorUseCase/CreateMentorService'
// import { AddMentoredService } from './AddMentoredService'

describe('Add Mentored to a Mentor', () => {
  let mentorsRepositoryInMemory: IMentorsRepositories
  let createMentorService: CreateMentorService
  let mentoredsRepositoryInMemory: IMentoredsRepositories
  let createMentoredService: CreateMentoredService
  // let addMentoredService: AddMentoredService

  beforeAll(() => {
    mentorsRepositoryInMemory = new MentorsRepositoryInMemory()
    createMentorService = new CreateMentorService(mentorsRepositoryInMemory)
    mentoredsRepositoryInMemory = new MentoredsRepositoryInMemory()
    createMentoredService = new CreateMentoredService(
      mentoredsRepositoryInMemory
    )
    // addMentoredService = new AddMentoredService(
    //   mentorsRepositoryInMemory,
    //   mentoredsRepositoryInMemory
    // )
  })
  it('should be able add mentored to a mentor', async () => {
    const mentorData: Mentor = Mentor.create({
      name: 'Test Mentor Name',
      password: 'passwordTestMentor',
      email: 'test_mentor@test.com',
      github: 'https://github.com/GitTestMentor',
      linkedin: 'in/LinkedinTestMentor',
      m_max: 3,
      about: 'About Test Mentor sample text',
      field: 'Tests Mentor',
      languages: ['Typescript']
    })
    await createMentorService.execute(mentorData)

    const mentoredData: Mentored = Mentored.create({
      name: 'Test Mentored Name',
      password: 'passwordTestMentored',
      email: 'test_mentored@test.com',
      github: 'https://github.com/GitTestMentored',
      linkedin: 'in/LinkedinTestMentored',
      about: 'About Test Mentored sample text',
      field: 'Tests Mentored',
      languages: ['Typescript']
    })
    await createMentoredService.execute(mentoredData)
  })
})
