import { Route, Routes } from 'react-router-dom'
import ButtonAppBar from './components/NavBar'
import UsersPage from './pages/UsersPage'
import DetailUserPage from './pages/DetailUserPage'
import CreateUserPage from './pages/CreateUserPage'

const App = (): JSX.Element => {
  return (
    <>
    <ButtonAppBar />
    <Routes>
      <Route path="/users" element={<UsersPage />} />
      <Route
          path="/users/:id"
          element={<DetailUserPage />}
        />
      <Route path='/users/form' element={<CreateUserPage />} />
    </Routes>
    </>
  )
}

export default App
