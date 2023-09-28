/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-misused-promises */
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Alert, Button } from '@mui/material'
import useCreateUser from '../hooks/useCreateUser'

const CreateUserPage = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isError,
    isSuccess,
    error
  } = useCreateUser()

  if (isError) return <Alert severity='error'>{(error as Error).message}</Alert>
  if (isSuccess) return <Alert severity='success'>New user added!</Alert>
  return (
        <Box sx={{
          width: 300,
          height: 300,
          display: 'contents'
        }}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ textAlign: 'center' }}>
            <h3>Create a new user</h3>
            <TextField {...register('first_name', { required: 'Required' })} type="text" placeholder='first name' size="small" />
            <p>{errors.first_name?.message}</p>
            <TextField {...register('last_name', { required: 'Required' })} type="text" placeholder='last name' size="small" />
            <p>{errors.last_name?.message}</p>
            <TextField {...register('email')} type="email" name="email" id="email" placeholder='email' size="small" />
            <p>{errors.email?.message}</p>
            <Button variant="contained" type="submit">Send</Button>
        </form>
        </Box>
  )
}

export default CreateUserPage
