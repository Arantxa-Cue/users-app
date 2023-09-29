import { rest } from 'msw'

export const handlers = [
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
  }),

  rest.get('https://reqres.in/api/error', (res: any, ctx: any) => {
    return res(ctx.status(500), ctx.json({ message: 'Internal Server Error' }))
  }),

  rest.get('https://reqres.in/api/networkError', (res: any) => {
    return res.networkError('Network error')
  })
]
