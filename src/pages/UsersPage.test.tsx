import { render, screen } from '@testing-library/react'
import UsersPage from './UsersPage'
import { BrowserRouter } from 'react-router-dom'

describe('Given a UsersPage Component', () => {
  describe('When it receives a list of users', () => {
    test('renders user cards', () => {
      render(
    <BrowserRouter>
      <UsersPage />
    </BrowserRouter>)
      expect(screen.getAllByRole('list'))
    })
  })
})
