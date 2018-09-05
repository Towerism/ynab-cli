import { config } from './config'

export function auth (program) {
  program.command('auth [token]')
    .action(authenticate)
}

function authenticate (token) {
  if (token) {
    config.token = token
  } else {
    console.log('the saved token is: %j', config.token)
  }
}
