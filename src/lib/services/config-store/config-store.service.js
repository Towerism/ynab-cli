import { provide } from '../../ioc'
import ConfigStore from 'configstore'

export const ConfigStoreService = provide('configStoreService', {
  provider: {
    useValue: new ConfigStore('ynab-cli', { token: '' })
  }
})
