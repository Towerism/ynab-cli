import { Controller } from '../ioc/controller'
import { Action } from '../ioc/action'
import { SuccessView } from '../views/success.view'
import { UserView } from '../views/auth/user.view'

@Controller({
  command: 'auth',
  options: [
    ['-t, --token <token>', 'set token'],
    ['-u, --user', 'get user information']
  ]
})
class AuthController {
  constructor ({ configService, userService }) {
    this._config = configService
    this._userService = userService
  }

  @Action({
    forOptions: options => options.token,
    view: SuccessView
  })
  setToken ({ token }) {
    this._config.token = token
    return 'Token saved.'
  }

  @Action({
    forOptions: options => options.user,
    view: UserView
  })
  async getToken () {
    return { id: await this._getUserId() }
  }

  async _getUserId () {
    const response = await this._userService.getCurrentUser()
    return response.data.user.id
  }
}

export { AuthController }
