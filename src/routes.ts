import { Router } from 'express'

import { CreateMentorController } from './modules/Mentor/useCases/CreateMentorUseCase/CreateMentorController'
import { ListAllMentorsController } from './modules/Mentor/useCases/ListAllMentorsUseCase/ListAllMentorsController'
import { CreateMentoradoController } from './modules/Mentorado/useCases/CreateMentoradoUseCase/CreateMentoradoController'
import { ListAllMentoradosController } from './modules/Mentorado/useCases/ListAllMentoradosUseCase/ListAllMentoradosController'

const routes = Router()

const createMentorController = new CreateMentorController()
const createMentoradoController = new CreateMentoradoController()
const listAllMentorsController = new ListAllMentorsController()
const listAllMentoradosController = new ListAllMentoradosController()

routes
  .post('/mentor/create', createMentorController.handle)
  .get('/mentor', listAllMentorsController.handle)

routes
  .post('/mentorado/create', createMentoradoController.handle)
  .get('/mentorado', listAllMentoradosController.handle)

export { routes }
