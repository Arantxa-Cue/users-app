import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { fetchUsersList } from './api'
import { handlers } from '../test/handlers'

const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('fetchUsersList Function', () => {
  test('fetches user list successfully', async () => {
    server.use(
      rest.get('https://reqres.in/api/users', (res: any, ctx: any) => {
        return res(ctx.json({
          page: 2,
          per_page: 6,
          total: 12,
          total_pages: 2,
          data: [
            {
              id: 7,
              email: 'arantxa.cuello@reqres.in',
              first_name: 'Arantxa',
              last_name: 'Cuello',
              avatar: 'https://reqres.in/img/faces/7-image.jpg'
            }
          ],
          support: {
            url: 'https://reqres.in/#support-heading',
            text: 'To keep ReqRes free, contributions towards server costs are appreciated!'
          }
        }))
      })
    )

    const data = await fetchUsersList(1)

    expect(data).toEqual({
      page: 2,
      per_page: 6,
      total: 12,
      total_pages: 2,
      data: [
        {
          id: 7,
          email: 'arantxa.cuello@reqres.in',
          first_name: 'Arantxa',
          last_name: 'Cuello',
          avatar: 'https://reqres.in/img/faces/7-image.jpg'
        }
      ],
      support: {
        url: 'https://reqres.in/#support-heading',
        text: 'To keep ReqRes free, contributions towards server costs are appreciated!'
      }
    })
  })

  test('handles server error', async () => {
    server.use(
      rest.get('https://reqres.in/api/users', (res: any, ctx: any) => {
        return res(ctx.status(500), ctx.json({ message: 'Internal Server Error' }))
      })
    )

    try {
      await fetchUsersList(1)
    } catch (error) {
      expect((error as Error).message).toEqual('Error fetching user list')
    }
  })

  test('handles network error', async () => {
    server.use(
      rest.get('https://reqres.in/api/users', (res: any) => {
        return res.networkError('Network error')
      })
    )

    try {
      await fetchUsersList(1)
    } catch (error) {
      expect((error as Error).message).toEqual('Error fetching user list')
    }
  })
})
