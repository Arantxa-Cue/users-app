import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import { Link } from 'react-router-dom'

const DetailButton = ({ id }: any): JSX.Element => {
  return (
    <Link to={`${id}`}>
      <RemoveRedEyeIcon sx={{ color: 'aquamarine' }}/>
    </Link>
  )
}

export default DetailButton
