import { Router } from 'express'

import { CreateMentorController } from './modules/Mentor/useCases/CreateMentorUseCase/CreateMentorController'
import { ListAllMentorsController } from './modules/Mentor/useCases/ListAllMentorsUseCase/ListAllMentorsController'
import { CreateMentoredController } from './modules/Mentored/useCases/CreateMentoredUseCase/CreateMentoredController'
import { ListAllMentoredsController } from './modules/Mentored/useCases/ListAllMentoredsUseCase/ListAllMentoredsController'

const routes = Router()

const createMentorController = new CreateMentorController()
const createMentoradoController = new CreateMentoredController()
const listAllMentorsController = new ListAllMentorsController()
const listAllMentoradosController = new ListAllMentoredsController()

routes
  .post('/mentor/create', createMentorController.handle)
  .get('/mentor', listAllMentorsController.handle)

routes
  .post('/mentorado/create', createMentoradoController.handle)
  .get('/mentorado', listAllMentoradosController.handle)

export { routes }
