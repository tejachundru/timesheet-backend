export interface DtoLogin {
  tokenType: string
  user: {
    uid: string
  }
  fullname: string
  email: string
  accessToken: string
  expiresIn: number
  message: string
}
