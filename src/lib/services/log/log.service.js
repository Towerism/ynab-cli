import { Injectable } from 'commander-mvc'
import chalk from 'chalk'

@Injectable()
class LogService {
  print (message) {
    console.log(message)
  }

  error (message) {
    console.log(chalk.bold.red(message))
  }

  silly (message) {
    console.log(chalk.italic.cyan(message))
  }

  json (object) {
    console.log(JSON.stringify(object, null, 2))
  }
}

export { LogService }
