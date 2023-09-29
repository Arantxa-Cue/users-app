import { type Dispatch, type SetStateAction } from 'react'
export interface User {
  id: number
  first_name: string
  last_name: string
  email: string
  avatar: string
}

export interface UserCardProps {
  data: User
  support: {
    url: string
    text: string
  }
}

export interface IFormInput {
  first_name: string
  last_name: string
  email: string
}

export interface ApiResponse {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: User[]
  support: {
    url: string
    text: string
  }
}

export interface UseUsers {
  todos: User[]
  isLoading: boolean
  isFetching: boolean
  error?: string
  setUserFilter: Dispatch<SetStateAction<number | null>>
}

export interface FilterUser {
  searchQuery: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
  filteredUsers: User[] | null
  filterUsers: () => void
}

export interface Button {
  id: number
}
