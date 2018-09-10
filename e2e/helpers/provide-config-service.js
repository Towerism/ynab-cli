import { provide } from 'commander-mvc'

export function provideConfigService (useValue) {
  provide('configService', {
    provider: {
      useValue
    }
  })
}
