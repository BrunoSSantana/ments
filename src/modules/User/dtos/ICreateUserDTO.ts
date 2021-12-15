export interface ICreateUserDTO {
  about: string
  name: string
  password: string
  email: string
  field: string
  github: string
  m_max: number
  languages: string[]
  linkedin?: string
}
