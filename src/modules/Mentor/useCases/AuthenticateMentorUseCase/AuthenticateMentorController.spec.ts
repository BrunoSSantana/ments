// /**
//  * @jest-environment ./prisma/prisma-environment-jest
//  */
// import request from 'supertest'

// import { app } from '../../../../app'

// jest.setTimeout(30_000)

// describe('Authenticate Mentor Controller', () => {
//   it('Should be able to athenticate Mentor', async () => {
//     await request(app)
//       .post('/api/mentor/create')
//       .send({
//         name: 'Test Mentor Name Controller',
//         password: 'passwordTestMentorController',
//         email: 'test_mentor_controller@test.com',
//         github: 'https://github.com/GitTestMentorController',
//         linkedin: 'in/LinkedinTestMentorController',
//         m_max: 1,
//         about: 'About Test sample text Mentor Controller',
//         field: 'Tests Mentor Controller',
//         languages: ['Jest', 'Mentor', 'Controller']
//       })
//     const response = await request(app).post('/api/mentor/login').send({
//       password: 'passwordTestMentorController',
//       email: 'test_mentor_controller@test.com'
//     })
//     expect(response.body).toHaveProperty('token')
//     expect(response.status).toBe(200)
//   })

//   it('Should not be able to authenticate without Mentor', async () => {
//     const response = await request(app).post('/api/mentor/login').send({
//       password: 'passwordtestwithoutmentor',
//       email: 'testwithoutmentor@test.com'
//     })
//     console.log(response.body)

//     expect(response.status).toBe(401)
//   })

//   it('Should not be able to athenticate with password incorrect', async () => {
//     await request(app)
//       .post('/api/mentor/create')
//       .send({
//         name: 'Test Mentor Name Controller',
//         password: 'passwordTestMentorController',
//         email: 'testmentorpasswordincorrect@test.com',
//         github: 'https://github.com/GitTestMentorController',
//         linkedin: 'in/LinkedinTestMentorController',
//         m_max: 2,
//         about: 'About Test sample text Mentor Integration',
//         field: 'Tests Mentor Controller',
//         languages: ['Mentor']
//       })
//     const response = await request(app).post('/api/mentor/login').send({
//       password: 'passwordincorrect',
//       email: 'testmentorpasswordincorrect@test.com'
//     })

//     expect(response.status).toBe(401)
//   })
// })
