import * as utils from '../utils.js'

describe('Test API request', () => {
  test('Get successful result of API call', async() => {
    const limit = 100
    await utils.fetchUsers(limit)
    .then(data => {
      expect(data).toBeDefined()
      expect(data.length).toBe(limit)
    })
  })
})
