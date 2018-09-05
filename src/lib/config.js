import ConfigStore from 'configstore'

const TOKEN = 'token'

export class Config {
  constructor () {
    this.config = new ConfigStore('ynab-cli', { [TOKEN]: null })
  }

  set token (token) {
    this.config.set(TOKEN, token)
  }

  get token () {
    return this.config.get(TOKEN)
  }
}

export const config = new Config()
