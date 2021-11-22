import { Router } from 'express'

import { ensureAuthenticated } from './middlewares/ensureAuthenticated'
import { AddMentoredFactory } from './modules/Mentor/useCases/AddMentoredUseCase/AddMentoredFactory'
import { AuthenticateMentorFactory } from './modules/Mentor/useCases/AuthenticateMentorUseCase/AuthenticateMentorFactory'
import { createMentorFactory } from './modules/Mentor/useCases/CreateMentorUseCase/CreateMentorFactory'
import { listAllMentorsFactory } from './modules/Mentor/useCases/ListAllMentorsUseCase/ListAllMentorsFactory'
import { AuthenticateMentoredController } from './modules/Mentored/useCases/AuthenticateMentoredUseCase/AuthenticateMentoredController'
import { CreateMentoredController } from './modules/Mentored/useCases/CreateMentoredUseCase/CreateMentoredController'
import { ListAllMentoredsController } from './modules/Mentored/useCases/ListAllMentoredsUseCase/ListAllMentoredsController'

const routes = Router()

const authenticateMentoredController = new AuthenticateMentoredController()
const createMentoradoController = new CreateMentoredController()
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
  .put('/mentor/addMentored', ensureAuthenticated, (request, response) => {
    AddMentoredFactory().handle(request, response)
  })

// Mentored
routes
  .post('/mentored/create', createMentoradoController.handle)
  .post('/mentored/login', authenticateMentoredController.handle)
  .get('/mentored', ensureAuthenticated, listAllMentoradosController.handle)

export { routes }
