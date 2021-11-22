import { Router } from 'express'

import { ensureAuthenticated } from './middlewares/ensureAuthenticated'
import { AddMentoredController } from './modules/Mentor/useCases/AddMentoredUseCase/AddMentoredController'
import { AuthenticateMentorFactory } from './modules/Mentor/useCases/AuthenticateMentorUseCase/AuthenticateMentorFactory'
import { createMentorFactory } from './modules/Mentor/useCases/CreateMentorUseCase/CreateMentorFactory'
import { listAllMentorsFactory } from './modules/Mentor/useCases/ListAllMentorsUseCase/ListAllMentorsFactory'
import { AuthenticateMentoredController } from './modules/Mentored/useCases/AuthenticateMentoredUseCase/AuthenticateMentoredController'
import { CreateMentoredController } from './modules/Mentored/useCases/CreateMentoredUseCase/CreateMentoredController'
import { ListAllMentoredsController } from './modules/Mentored/useCases/ListAllMentoredsUseCase/ListAllMentoredsController'

const routes = Router()

const authenticateMentoredController = new AuthenticateMentoredController()
const createMentoradoController = new CreateMentoredController()
const addMentoredController = new AddMentoredController()
const listAllMentoradosController = new ListAllMentoredsController()

// Mentor
routes
  .post('/mentor/create', (request, response) => {
    createMentorFactory().handle(request, response)
  })
  .post('/mentor/login', (request, response) => {
    AuthenticateMentorFactory().handle(request, response)
  })
  .get('/mentor', ensureAuthenticated, (request, response) => {
    listAllMentorsFactory().handle(request, response)
  })
  .put('/mentor/addMentored', ensureAuthenticated, addMentoredController.handle)

routes
  .post('/mentored/create', createMentoradoController.handle)
  .post('/mentored/login', authenticateMentoredController.handle)
  .get('/mentored', ensureAuthenticated, listAllMentoradosController.handle)

export { routes }
