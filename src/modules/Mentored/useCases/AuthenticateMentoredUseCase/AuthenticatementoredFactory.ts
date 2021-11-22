import { PrismaMentoredsRepository } from '../../../../repositories/prisma/PrismaMentoredsRepository'
import { AuthenticateMentoredController } from './AuthenticateMentoredController'
import { AuthenticateMentoredService } from './AuthenticateMentoredService'

export const AuthenticatementoredFactory =
  (): AuthenticateMentoredController => {
    const mentoredsRepository = new PrismaMentoredsRepository()
    const authenticateMentored = new AuthenticateMentoredService(
      mentoredsRepository
    )
    const authenticateMentoredController = new AuthenticateMentoredController(
      authenticateMentored
    )
    return authenticateMentoredController
  }
