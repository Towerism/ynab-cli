import { provide } from '../../src/lib/ioc'

export function provideConfigService (useValue) {
  provide('configService', {
    provider: {
      useValue
    }
  })
}
