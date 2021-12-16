import { createUserFactory } from '@modules/User/useCases/CreateUserUseCase/CreateUserFactory'
import { Router } from 'express'

import { ensureAuthenticated } from './middlewares/ensureAuthenticated'

const routes = Router()

// Mentor
routes.post('/user/create', (request, response) => {
  createUserFactory().handle(request, response)
})
// .post('/user/login', (request, response) => {
//   AuthenticateMentorFactory().handle(request, response)
// })
// .get('/user', ensureAuthenticated, (request, response) => {
//   listAllMentorsFactory().handle(request, response)
// })

export { routes }
