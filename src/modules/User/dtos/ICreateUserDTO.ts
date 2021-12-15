export interface ICreateUserDTO {
  about: string
  name: string
  password: string
  email: string
  field: string
  github: string
  languages: string[]
  linkedin?: string
}
