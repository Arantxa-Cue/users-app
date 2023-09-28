import { type User, type ApiResponse, type UserCardProps, type IFormInput } from '../types/Interfaces'

export const client = {
  baseURL: 'https://reqres.in/api/'
}

export const fetchUsersList = async (page: number = 1): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${client.baseURL}users?page=${page}`)
    const data: ApiResponse = await response.json()

    if (response.status !== 200) {
      throw new Error(`Request failed with status: ${response.status}`)
    }

    return data
  } catch (error) {
    throw new Error('Error fetching user list')
  }
}

export const fetchSingleUser = async (id: number): Promise<User> => {
  try {
    const response = await fetch(`${client.baseURL}users/${id}`)
    const data: UserCardProps = await response.json()

    if (response.status !== 200) {
      throw new Error(`Request failed with status: ${response.status}`)
    }

    return data.data
  } catch (error) {
    throw new Error('Error fetching single user')
  }
}

export const fetchCreateUser = async (newUser: IFormInput): Promise<IFormInput> => {
  const response = await fetch(`${client.baseURL}users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`)
  }

  const responseData = await response.json()
  return responseData
}
