import { PrismaMentorsRepository } from '../../../../repositories/prisma/PrismaMentorsRepository'
import { CreateMentorController } from './CreateMentorController'
import { CreateMentorService } from './CreateMentorService'

export const createMentorFactory = (): CreateMentorController => {
  const mentorsRepository = new PrismaMentorsRepository()
  const createMentor = new CreateMentorService(mentorsRepository)
  const createMentorController = new CreateMentorController(createMentor)
  return createMentorController
}
