import { Injectable } from 'commander-mvc'

const TOKEN = 'token'
const ACTIVE_BUDGET_ID = 'activeBudgetId'

@Injectable()
class ConfigService {
  constructor ({ configStoreService }) {
    this._store = configStoreService
  }

  set token (token) {
    this._store.set(TOKEN, token)
  }

  get token () {
    return this._store.get(TOKEN)
  }

  set activeBudgetId (id) {
    this._store.set(ACTIVE_BUDGET_ID, id)
  }

  get activeBudgetId () {
    return this._store.get(ACTIVE_BUDGET_ID)
  }
}

export { ConfigService }
