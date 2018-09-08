import { Injectable } from '../../../ioc'

@Injectable()
class CategoryService {
  constructor ({ ynabService }) {
    this._ynab = ynabService
  }

  async list (budgetId) {
    return this._ynab.categories.getCategories(budgetId)
  }
}

export { CategoryService }
