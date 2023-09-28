/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { fetchCreateUser } from '../api/api'
import { type IFormInput } from '../types/Interfaces'

const useCreateUser = () => {
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    defaultValues: {
      first_name: '',
      last_name: '',
      email: ''
    }
  })

  const { mutate, isError, isSuccess, error } = useMutation(fetchCreateUser)

  const onSubmit = (formData: IFormInput) => {
    mutate(formData)
    setTimeout(() => {
      navigate('/users')
    }, 2000)
  }

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isError,
    isSuccess,
    error
  }
}

export default useCreateUser
