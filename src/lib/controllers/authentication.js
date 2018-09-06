import { Controller } from '../ioc/controller'
import { Action } from '../ioc/action'
import chalk from '../../../node_modules/chalk'

@Controller({
  command: 'auth',
  options: [
    ['-t, --token <token>', 'set token'],
    ['-u, --user', 'get user information']
  ]
})
class Authentication {
  constructor ({ configService, userService, logService }) {
    this._config = configService
    this._userService = userService
    this._logger = logService
  }

  @Action({ forOptions: options => options.token })
  async setToken ({ token }) {
    this._config.token = token
    this._logger.print(chalk.green('Token saved.'))
  }

  @Action({ forOptions: options => options.user })
  async getToken () {
    const id = await this._getUserId()
    this._logger.print(`user-id: ${chalk.yellow(id)}`)
  }

  async _getUserId () {
    const response = await this._userService.getCurrentUser()
    return response.data.user.id
  }
}

export { Authentication }
