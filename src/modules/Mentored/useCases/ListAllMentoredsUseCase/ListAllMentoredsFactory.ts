import { PrismaMentoredsRepository } from 'repositories/prisma/PrismaMentoredsRepository'

import { ListAllMentoredsController } from './ListAllMentoredsController'
import { ListAllMentoredsService } from './ListAllMentoredsService'

export const ListAllMentoredsFactory = (): ListAllMentoredsController => {
  const mentoredsRepository = new PrismaMentoredsRepository()
  const listAllMentoreds = new ListAllMentoredsService(mentoredsRepository)
  const listAllMentoredsController = new ListAllMentoredsController(
    listAllMentoreds
  )
  return listAllMentoredsController
}
