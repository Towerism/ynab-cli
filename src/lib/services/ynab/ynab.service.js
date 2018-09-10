import * as ynab from 'ynab'
import { provide } from 'commander-mvc'

function makeYnabService ({ configService }) {
  return new ynab.API(configService.token)
}

export const YnabService = provide('ynabService', {
  provider: {
    useFactory: makeYnabService
  }
})
