import { Injectable } from '../../ioc/injectable'
import { utils } from 'ynab'
import moment from 'moment'
import chalk from '../../../../node_modules/chalk'

@Injectable()
class FormatService {
  milliUnitsToUsd (units) {
    return '$' + utils.convertMilliUnitsToCurrencyAmount(units, 2)
  }

  isoToLongDate (isoDate) {
    return moment(isoDate).format('LL')
  }

  successMessage (message) {
    return chalk.green(message)
  }
}

export { FormatService }
