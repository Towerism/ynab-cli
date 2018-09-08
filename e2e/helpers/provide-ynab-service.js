import { provide } from '../../src/lib/ioc'

export function provideYnabService (service) {
  provide('ynabService', {
    provider: {
      useValue: service
    }
  })
}
