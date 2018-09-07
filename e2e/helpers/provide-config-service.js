import { provide } from '../../src/lib/ioc/provide'

export function provideConfigService (useValue) {
  provide('configService', {
    provider: {
      useValue
    }
  })
}
