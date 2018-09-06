import { Injectable } from '../../ioc/injectable'
import chalk from 'chalk'

@Injectable()
class LogService {
  print (message) {
    console.log(message)
  }

  silly (message) {
    console.log(chalk.italic.cyan(message))
  }
}

export { LogService }
