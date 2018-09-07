import { categories } from './fixtures/categories'
import { runProgram } from './helpers/run-program'
import { provideYnabService } from './helpers/provide-ynab-service'
import { provideConfigService } from './helpers/provide-config-service'

describe('category', () => {
  let getCategories = jest.fn()

  beforeEach(() => {
    provideYnabService({
      categories: {
        getCategories
      }
    })
    getCategories
      .mockImplementation(async () => Promise.resolve(categories))
  })

  describe('--list <id>', () => {
    test('should get categories by id', async () => {
      const id = 'my-category-id'
      await runProgram('category', '--list', id)
      expect(getCategories).toBeCalledWith(id)
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

    test('should get categories by active budget id', async () => {
      await runProgram('category', '--list')
      expect(getCategories).toBeCalledWith(activeBudgetId)
    })
  })
})
