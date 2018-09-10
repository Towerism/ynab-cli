import { provide } from 'commander-mvc'

export function provideYnabService (service) {
  provide('ynabService', {
    provider: {
      useValue: service
    }
  })
}
