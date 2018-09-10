import { provide } from 'commander-mvc'
import ConfigStore from 'configstore'

export const ConfigStoreService = provide('configStoreService', {
  provider: {
    useValue: new ConfigStore('ynab-cli', { token: '' })
  }
})
