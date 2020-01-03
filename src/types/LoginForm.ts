export interface LoginForm {
  valid: boolean
  generalError: string
  working: boolean
  username: {
    usernameType: any
    valid: boolean
    error: string
    value: string
    touched: boolean
  }
  password: {
    valid: boolean
    error: string
    value: string
    touched: boolean
  }
}
