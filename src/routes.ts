import { Router } from 'express'

import { AddMentoredController } from './modules/Mentor/useCases/AddMentoredUseCase/AddMentoredController'
import { AuthenticateMentorController } from './modules/Mentor/useCases/AuthenticateMentorUseCase/AuthenticateMentorController'
import { CreateMentorController } from './modules/Mentor/useCases/CreateMentorUseCase/CreateMentorController'
import { ListAllMentorsController } from './modules/Mentor/useCases/ListAllMentorsUseCase/ListAllMentorsController'
import { AuthenticateMentoredController } from './modules/Mentored/useCases/AuthenticateMentoredUseCase/AuthenticateMentoredController'
import { CreateMentoredController } from './modules/Mentored/useCases/CreateMentoredUseCase/CreateMentoredController'
import { ListAllMentoredsController } from './modules/Mentored/useCases/ListAllMentoredsUseCase/ListAllMentoredsController'

const routes = Router()

const createMentorController = new CreateMentorController()
const authenticateMentorController = new AuthenticateMentorController()
const authenticateMentoredController = new AuthenticateMentoredController()
const createMentoradoController = new CreateMentoredController()
const addMentoredController = new AddMentoredController()
const listAllMentorsController = new ListAllMentorsController()
const listAllMentoradosController = new ListAllMentoredsController()

// Mentor
routes
  .post('/mentor/create', createMentorController.handle)
  .get('/mentor', listAllMentorsController.handle)
  .put('/mentor/addMentored', addMentoredController.handle)
  .post('/mentor/login', authenticateMentorController.handle)

routes
  .post('/mentored/create', createMentoradoController.handle)
  .get('/mentored', listAllMentoradosController.handle)
  .post('/mentored/login', authenticateMentoredController.handle)

export { routes }
