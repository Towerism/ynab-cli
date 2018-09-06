import { includes } from 'lodash'

const table = {}

export function add (token, constructor) {
  table[token] = constructor
}

export function get (token, constructor) {
  return table[token]
}

export function contains (token) {
  return includes(Object.keys(table), token)
}
