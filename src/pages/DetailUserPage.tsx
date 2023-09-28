/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { fetchSingleUser } from '../api/api'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import UserCard from '../components/UserCard'
import GoBackButton from '../components/GoBackButton'
import { Alert, Box } from '@mui/material'

const DetailUserPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>()
  const { isLoading, data, error, isError } = useQuery(['singleUser', id], async () => await fetchSingleUser(parseInt(id as string)))

  if (isLoading) return <Alert severity='info'>Loading...</Alert>
  if (isError) return <Alert severity='error'>{(error as Error).message}</Alert>

  return (
      <>
        <Box sx={{ textAlign: 'center', margin: 2 }}>
        <UserCard id={data.id} first_name={data.first_name} last_name={data.last_name} email={data.email} avatar={data.avatar} />
        <GoBackButton />
        </Box>
      </>
  )
}

export default DetailUserPage
