import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const ButtonAppBar = (): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1, mb: 4 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to='/users' style={{ textDecoration: 'none', color: 'white' }}>
              Home
            </Link>
          </Typography>
          <Link to='/users/form' style={{ textDecoration: 'none', color: 'white' }}>
          <Button color="inherit">Add User</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default ButtonAppBar
