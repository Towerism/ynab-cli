import * as ynab from 'ynab'
import { provide } from '../../ioc'

function makeYnabService ({ configService }) {
  return new ynab.API(configService.token)
}

export const YnabService = provide('ynabService', {
  provider: {
    useFactory: makeYnabService
  }
})
