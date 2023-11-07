import * as api from '../api.js'

describe('Test API request', () => {
  test('Get successful result of API call', async() => {
    await api.fetchUsers()
    .then(data => {
      expect(data).toBeDefined()
      expect(data.length).toBe(100)
    })
  })
})
