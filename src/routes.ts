import { Router } from 'express'

import { CreateMentorController } from './modules/Mentor/useCases/CreateMentorUseCase/CreateMentorController'
import { ListAllMentorsController } from './modules/Mentor/useCases/ListAllMentorsUseCase/ListAllMentorsController'

const routes = Router()

const createMentorController = new CreateMentorController()
const listAllMentorsController = new ListAllMentorsController()

routes.post('/mentor/create', createMentorController.handle)
routes.get('/mentor', listAllMentorsController.handle)

export { routes }
