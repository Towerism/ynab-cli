import { Injectable } from '../../../ioc/injectable'

@Injectable()
class CategoryService {
  constructor ({ ynabService }) {
    this._ynab = ynabService
  }

  async list (budgetId) {
    try {
      return this._ynab.categories.getCategories(budgetId)
    } catch (error) {
      console.error(error)
    }
  }
}

export { CategoryService }
