export interface UserDto {
  id: string
  phoneNumber: string
  firstName: string
  lastName?: string
  isActive?: boolean
  verified?: boolean
}
