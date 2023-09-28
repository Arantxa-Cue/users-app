/* eslint-disable @typescript-eslint/naming-convention */
// import { type UserCardProps } from '../types/Interfaces'
import Avatar from '@mui/material/Avatar'
import { type User } from '../types/Interfaces'

const UserCard = ({ avatar, first_name, last_name, email }: User): JSX.Element => {
  return (
    <>
      <Avatar src={avatar} sx={{ width: 100, height: 100, margin: 'auto' }} alt="profile-image" />
      <p>{first_name} {last_name}</p>
      <p>{email}</p>
    </>
  )
}

export default UserCard
