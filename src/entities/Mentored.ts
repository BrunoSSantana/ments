class Mentored {
  id?: string
  name: string
  password: string
  email: string
  github: string
  linkedin?: string | null
  about: string
  field: string
  languages: string[]
  mentorId?: string | null

  private constructor({
    name,
    password,
    email,
    github,
    linkedin,
    about,
    field,
    languages
  }: Mentored) {
    return Object.assign(this, {
      name,
      password,
      email,
      github,
      linkedin,
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
    about,
    field,
    languages
  }: Mentored): Mentored {
    const mentor = new Mentored({
      name,
      password,
      email,
      github,
      linkedin,
      about,
      field,
      languages
    })
    return mentor
  }
}

export { Mentored }
