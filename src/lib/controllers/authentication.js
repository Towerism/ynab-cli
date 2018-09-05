import { Injectable } from '../ioc/injectable'
import { Config } from '../config/config'

@Injectable()
class Authentication {
  constructor () {
    this.config = new Config()
  }

  authenticate (token) {
    if (token) {
      this.config.token = token
      console.log('wrote token to config (token: %j)', this.config.token)
    } else {
      console.log('token read from config: %j', this.config.token)
    }
  }
}

export { Authentication }
