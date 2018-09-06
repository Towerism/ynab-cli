import { Injectable } from '../../../ioc/injectable'

@Injectable()
class UserService {
  constructor ({ ynabService }) {
    this._ynab = ynabService
  }

  async getCurrentUser () {
    return this._ynab.user.getUser()
  }
}

export { UserService }
