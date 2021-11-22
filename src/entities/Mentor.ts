import { Mentored } from './Mentored'

class Mentor {
  id?: string
  name: string
  password: string
  email: string
  github: string
  linkedin?: string | null
  mentored?: Mentored[]
  m_max: number
  about: string
  field: string
  languages: string[]

  private constructor({
    name,
    password,
    email,
    github,
    linkedin,
    m_max,
    about,
    field,
    languages
  }: Mentor) {
    return Object.assign(this, {
      name,
      password,
      email,
      github,
      linkedin,
      m_max,
      about,
      field,
      languages
    })
  }

  static create({
    name,
    password,
    email,
    github,
    linkedin,
    m_max,
    about,
    field,
    languages
  }: Mentor): Mentor {
    const mentor = new Mentor({
      name,
      password,
      email,
      github,
      linkedin,
      m_max,
      about,
      field,
      languages
    })
    return mentor
  }
}

export { Mentor }
