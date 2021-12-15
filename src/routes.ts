import { Router } from 'express'

import { ensureAuthenticated } from './middlewares/ensureAuthenticated'

const routes = Router()

// Mentor
routes
  .post('/user/create', (request, response) => {
    createMentorFactory().handle(request, response)
  })
  .post('/user/login', (request, response) => {
    AuthenticateMentorFactory().handle(request, response)
  })
  .get('/user', ensureAuthenticated, (request, response) => {
    listAllMentorsFactory().handle(request, response)
  })

export { routes }
