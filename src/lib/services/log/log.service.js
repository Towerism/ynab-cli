import { Injectable } from '../../ioc/injectable'

@Injectable()
class LogService {
  print (message) {
    console.log(message)
  }
}

export { LogService }
