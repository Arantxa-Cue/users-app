/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { fetchUsersList } from '../api/api'
import { type User } from '../types/Interfaces'

const useUsers = () => {
  const [page, setPage] = useState<number>(1)
  const [searchItem, setSearchItem] = useState<string>('')

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  const { isLoading, data, error, isError } = useQuery(['getAll', page], async () => await fetchUsersList(page), { keepPreviousData: true })

  const filteredUsers = data?.data.filter((user: User) =>
    user.first_name.toLowerCase().includes(searchItem.toLowerCase()) ||
    user.last_name.toLowerCase().includes(searchItem.toLowerCase())
  )

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(event.target.value)
  }

  return {
    isLoading,
    error: isError ? (error as Error).message : null,
    page,
    setPage,
    searchItem,
    setSearchItem,
    handleSearch,
    handleChange,
    filteredUsers,
    data
  }
}

export default useUsers
