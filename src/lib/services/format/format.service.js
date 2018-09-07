import { Injectable } from '../../ioc/injectable'
import { utils } from 'ynab'
import moment from 'moment'

@Injectable()
class FormatService {
  milliUnitsToUsd (units) {
    return '$' + utils.convertMilliUnitsToCurrencyAmount(units, 2)
  }

  isoToLongDate (isoDate) {
    return moment(isoDate).format('LL')
  }
}

export { FormatService }
