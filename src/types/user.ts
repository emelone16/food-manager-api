import { Optional } from "./optional"

export interface User {
  email: string
  username: string
  pantry: string[]
}

export const createUser = (obj: any): Optional<User> => {
  const email = obj.email
  const username = obj.username
  const pantry = obj.pantry ? obj.pantry : []

  if (!email) {
    return null
  }
  if (!username) {
    return null
  }

  return { email, username, pantry }
}
