import { PrismaMentoredsRepository } from '../../../../repositories/prisma/PrismaMentoredsRepository'
import { PrismaMentorsRepository } from '../../../../repositories/prisma/PrismaMentorsRepository'
import { AddMentoredController } from './AddMentoredController'
import { AddMentoredService } from './AddMentoredService'

export const AddMentoredFactory = (): AddMentoredController => {
  const mentorsRepository = new PrismaMentorsRepository()
  const mentoredsRepository = new PrismaMentoredsRepository()
  const addMentored = new AddMentoredService(
    mentorsRepository,
    mentoredsRepository
  )
  const addMentoredController = new AddMentoredController(addMentored)
  return addMentoredController
}
