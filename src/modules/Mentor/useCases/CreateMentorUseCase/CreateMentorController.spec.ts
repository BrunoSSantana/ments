/**
 * @jest-environment ./prisma/prisma-environment-jest
 */
import request from 'supertest'

import { app } from '../../../../app'

jest.setTimeout(30_000)

describe('Create Mentor Controller', () => {
  it('Should be able to create a new Mentor', async () => {
    const response = await request(app)
      .post('/api/mentor/create')
      .send({
        name: 'Test Mentor Name Controller',
        password: 'passwordTestMentorController',
        email: 'test_mentor_controller@test.com',
        github: 'https://github.com/GitTestMentorController',
        linkedin: 'in/LinkedinTestMentorController',
        m_max: 1,
        about: 'About Test sample text Mentor Controller',
        field: 'Tests Mentor Controller',
        languages: ['Jest', 'Mentor', 'Controller']
      })

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('id')
  })

  // it('Should not be able to create an existing Mentor', async () => {
  //   await request(app)
  //     .post('/api/mentor/create')
  //     .send({
  //       name: 'TestMentorController',
  //       password: 'passwordTestMentorController',
  //       email: 'test@test.com',
  //       github: 'https://github.com/GitTestMentorController',
  //       linkedin: 'in/LinkedinTestMentorController',
  //       m_max: 2,
  //       about: 'About Test sample text Mentor Controller',
  //       field: 'Tests Mentor Controller',
  //       languages: ['Mentor', 'Controller']
  //     })

  //   const response = await request(app)
  //     .post('/api/mentor/create')
  //     .send({
  //       name: 'TestMentorController',
  //       password: 'passwordTestMentorController',
  //       email: 'test@test.com',
  //       github: 'https://github.com/GitTestMentorController',
  //       linkedin: 'in/LinkedinTestMentorController',
  //       m_max: 2,
  //       about: 'About Test sample text Mentor Controller',
  //       field: 'Tests Mentor Controller',
  //       languages: ['Mentor', 'Controller']
  //     })
  //   console.log(response.status)
  //   console.log(response.body)
  // })
})
