import { Injectable } from 'commander-mvc'
import { utils } from 'ynab'
import moment from 'moment'
import chalk from 'chalk'

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
