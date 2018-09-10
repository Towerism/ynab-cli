import { provideYnabService } from './helpers/provide-ynab-service'
import { user } from './fixtures/user'
import { runProgram } from './helpers/run-program'
import { provideConfigService } from './helpers/provide-config-service'
import { resolve } from 'commander-mvc'

describe('auth', () => {
  describe('--token <token>', () => {
    beforeEach(() => {
      provideConfigService({
        token: null
      })
    })

    test('should store the token', async () => {
      const token = 'user-token'
      await runProgram('auth', '--token', token)
      const config = resolve('configService')
      expect(config.token).toBe(token)
    })
  })

  describe('--user', () => {
    let getUser = jest.fn()

    beforeEach(() => {
      provideYnabService({
        user: {
          getUser
        }
      })
      getUser.mockImplementation(async () => user)
    })

    test('should get the current user', async () => {
      await runProgram('auth', '--user')
      expect(getUser).toHaveBeenCalled()
    })
  })
})
