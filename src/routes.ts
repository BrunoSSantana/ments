import { Router } from 'express'

import { CreateMentorController } from './modules/Mentor/useCases/CreateMentorUseCase/CreateMentorController'
const routes = Router()

const createMentorController = new CreateMentorController()
routes.post('/mentor/create', createMentorController.handle)

export { routes }
