import { PrismaMentorsRepository } from '../../../../repositories/prisma/PrismaMentorsRepository'
import { AuthenticateMentorController } from './AuthenticateMentorController'
import { AuthenticateMentorService } from './AuthenticateMentorService'

export const AuthenticateMentorFactory = (): AuthenticateMentorController => {
  const mentorsRepository = new PrismaMentorsRepository()
  const authenticateMentor = new AuthenticateMentorService(mentorsRepository)
  const authenticateMentorController = new AuthenticateMentorController(
    authenticateMentor
  )
  return authenticateMentorController
}
