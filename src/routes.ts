import { Router } from 'express'

import { ensureAuthenticated } from './middlewares/ensureAuthenticated'
import { AddMentoredController } from './modules/Mentor/useCases/AddMentoredUseCase/AddMentoredController'
import { AuthenticateMentorController } from './modules/Mentor/useCases/AuthenticateMentorUseCase/AuthenticateMentorController'
import { createMentorFactory } from './modules/Mentor/useCases/CreateMentorUseCase/CreateMentorFactory'
import { ListAllMentorsController } from './modules/Mentor/useCases/ListAllMentorsUseCase/ListAllMentorsController'
import { AuthenticateMentoredController } from './modules/Mentored/useCases/AuthenticateMentoredUseCase/AuthenticateMentoredController'
import { CreateMentoredController } from './modules/Mentored/useCases/CreateMentoredUseCase/CreateMentoredController'
import { ListAllMentoredsController } from './modules/Mentored/useCases/ListAllMentoredsUseCase/ListAllMentoredsController'

const routes = Router()

const authenticateMentorController = new AuthenticateMentorController()
const authenticateMentoredController = new AuthenticateMentoredController()
const createMentoradoController = new CreateMentoredController()
const addMentoredController = new AddMentoredController()
const listAllMentorsController = new ListAllMentorsController()
const listAllMentoradosController = new ListAllMentoredsController()

// Mentor
routes
  .post('/mentor/create', (request, response) => {
    createMentorFactory().handle(request, response)
  })
  .post('/mentor/login', authenticateMentorController.handle)
  .get('/mentor', ensureAuthenticated, listAllMentorsController.handle)
  .put('/mentor/addMentored', ensureAuthenticated, addMentoredController.handle)

routes
  .post('/mentored/create', createMentoradoController.handle)
  .post('/mentored/login', authenticateMentoredController.handle)
  .get('/mentored', ensureAuthenticated, listAllMentoradosController.handle)

export { routes }
