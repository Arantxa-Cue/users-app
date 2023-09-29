import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import { Link } from 'react-router-dom'
import { type Button } from '../types/Interfaces'

const DetailButton = ({ id }: Button): JSX.Element => {
  return (
    <Link to={`${id}`}>
      <RemoveRedEyeIcon sx={{ color: 'aquamarine' }}/>
    </Link>
  )
}

export default DetailButton
