import { provide } from '../../src/lib/ioc/provide'

export function provideYnabService (service) {
  provide('ynabService', {
    provider: {
      useValue: service
    }
  })
}
