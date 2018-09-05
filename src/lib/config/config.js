import ConfigStore from 'configstore'

const TOKEN = 'token'

export class Config {
  constructor () {
    this._config = new ConfigStore('ynab-cli', { [TOKEN]: null })
  }

  set token (token) {
    this._config.set(TOKEN, token)
  }

  get token () {
    return this._config.get(TOKEN)
  }
}

export const config = new Config()
