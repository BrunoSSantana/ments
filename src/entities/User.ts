class User {
  id?: string
  name: string
  password: string
  email: string
  github: string
  linkedin?: string | null
  about: string
  field: string
  languages: string[]

  private constructor({
    name,
    password,
    email,
    github,
    linkedin,
    about,
    field,
    languages
  }: User) {
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
  }: User): User {
    const mentor = new User({
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

export { User }
