import { includes } from 'lodash'

const table = {}

export function add (token, options) {
  table[token] = options
}

export function get (token) {
  return table[token]
}

export function contains (token) {
  return includes(Object.keys(table), token)
}
