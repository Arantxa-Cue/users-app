/* eslint-disable @typescript-eslint/explicit-function-return-type */
import UserCard from '../components/UserCard'
import Grid from '@mui/material/Unstable_Grid2'
import Container from '@mui/material/Container'
import DetailButton from '../components/DetailButton'
import { Box, Alert, Pagination, Stack, TextField } from '@mui/material'
import { type User } from '../types/Interfaces'
import useUsers from '../hooks/useUsers'

const UsersPage = (): JSX.Element => {
  const {
    isLoading,
    data,
    error,
    searchItem,
    handleSearch,
    handleChange,
    filteredUsers
  } = useUsers()

  if (isLoading) return <p>Loading...</p>

  if (error != null) return <p>{(error as unknown as Error).message}</p>

  return (
    <Container maxWidth="md">
      <TextField
      sx={{ margin: 4 }}
        label="User search"
        value={searchItem}
        onChange={handleSearch}
      />
       {filteredUsers?.length === 0
         ? (
          <Alert severity="warning">User not found</Alert>
           )
         : (
    <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
      {filteredUsers?.map((user: User) => (
        <div key={user.id}>
        <Box sx={{ textAlign: 'center', margin: 2 }}>
        <UserCard avatar={user.avatar} email={user.email} last_name={user.last_name} first_name={user.first_name} id={user.id} />
        <DetailButton id={user.id} />
        </Box>
        </div>
      ))}
    </Grid>)}
    <Stack spacing={2} sx={{ margin: 5, alignItems: 'center' }}>
      <p>Total users: {data?.total}</p>
      <p>You are on page: {data?.page}</p>
      <Pagination count={data?.total_pages} page={data?.page} onChange={handleChange} />
    </Stack>
    </Container>
  )
}

export default UsersPage
