/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const GoBackButton = (): JSX.Element => {
  const navigate = useNavigate()
  const handleClick = () => navigate('/users')

  return (
    <Button onClick={handleClick}>Back to Users</Button>
  )
}

export default GoBackButton
