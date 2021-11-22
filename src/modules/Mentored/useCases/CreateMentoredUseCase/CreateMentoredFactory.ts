import { PrismaMentoredsRepository } from '../../../../repositories/prisma/PrismaMentoredsRepository'
import { CreateMentoredController } from './CreateMentoredController'
import { CreateMentoredService } from './CreateMentoredService'

export const CreateMentoredFactory = (): CreateMentoredController => {
  const mentoredsRepository = new PrismaMentoredsRepository()
  const createMentored = new CreateMentoredService(mentoredsRepository)
  const createMentoredController = new CreateMentoredController(createMentored)
  return createMentoredController
}
