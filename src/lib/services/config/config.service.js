import { Injectable } from '../../ioc/injectable'

const TOKEN = 'token'

@Injectable()
class ConfigService {
  constructor ({ configStoreService }) {
    this._config = configStoreService
  }

  set token (token) {
    this._config.set(TOKEN, token)
  }

  get token () {
    return this._config.get(TOKEN)
  }
}

export { ConfigService }
