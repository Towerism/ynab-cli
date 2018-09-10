import { budgets } from './fixtures/budgets'
import { runProgram } from './helpers/run-program'
import { resolve } from 'commander-mvc'
import { provideYnabService } from './helpers/provide-ynab-service'
import { provideConfigService } from './helpers/provide-config-service'

describe('budget', () => {
  let getBudgets = jest.fn()

  beforeEach(() => {
    provideYnabService({
      budgets: {
        getBudgets
      }
    })
    getBudgets
      .mockImplementation(async () => Promise.resolve(budgets))
  })
  describe('--list', () => {
    test('should get budgets', async () => {
      await runProgram('budget', '--list')
      expect(getBudgets).toBeCalledWith()
    })
  })

  describe('--use', () => {
    let activeBudgetId

    beforeEach(() => {
      provideConfigService({
        activeBudgetId
      })
    })

    test('should set active budget', async () => {
      const newActiveBudgetId = 'new-active-budget-id'
      await runProgram('budget', '--use', newActiveBudgetId)
      const config = resolve('configService')
      expect(config.activeBudgetId).toBe(newActiveBudgetId)
    })
  })
})
