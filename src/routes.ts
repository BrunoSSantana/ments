import { Router } from 'express'

import { CreateMentorController } from './modules/Mentor/useCases/CreateMentorUseCase/CreateMentorController'
import { ListAllMentorsController } from './modules/Mentor/useCases/ListAllMentorsUseCase/ListAllMentorsController'
import { CreateMentoradoController } from './modules/Mentorado/useCases/CreateMentoradoUseCase/CreateMentoradoController'

const routes = Router()

const createMentorController = new CreateMentorController()
const createMentoradoController = new CreateMentoradoController()
const listAllMentorsController = new ListAllMentorsController()

  .post('/mentorado/create', createMentoradoController.handle)

export { routes }
