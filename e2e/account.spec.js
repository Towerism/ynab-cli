import { accounts } from './fixtures/accounts'
import { runProgram } from './helpers/run-program'
import { provideYnabService } from './helpers/provide-ynab-service'
import { provideConfigService } from './helpers/provide-config-service'

describe('account', () => {
  let getAccounts = jest.fn()

  beforeEach(() => {
    provideYnabService({
      accounts: {
        getAccounts
      }
    })
    getAccounts
      .mockImplementation(async () => Promise.resolve(accounts))
  })

  describe('--list <id>', () => {
    test('should get accounts by id', async () => {
      const id = 'my-account-id'
      await runProgram('account', '--list', id)
      expect(getAccounts).toBeCalledWith(id)
    })
  })

  describe('--list', () => {
    let activeBudgetId

    beforeEach(() => {
      activeBudgetId = 'last-used-budget'
      provideConfigService({
        activeBudgetId
      })
    })

    test('should get accounts by active budget id', async () => {
      await runProgram('account', '--list')
      expect(getAccounts).toBeCalledWith(activeBudgetId)
    })
  })
})
