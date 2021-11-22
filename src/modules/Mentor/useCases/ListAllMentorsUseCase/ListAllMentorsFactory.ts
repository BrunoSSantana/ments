import { PrismaMentorsRepository } from '../../../../repositories/prisma/PrismaMentorsRepository'
import { ListAllMentorsController } from './ListAllMentorsController'
import { ListAllMentorsService } from './ListAllMentorsService'

export const listAllMentorsFactory = (): ListAllMentorsController => {
  const mentorsRepository = new PrismaMentorsRepository()
  const listAllMentors = new ListAllMentorsService(mentorsRepository)
  const listAllMentorsController = new ListAllMentorsController(listAllMentors)
  return listAllMentorsController
}
