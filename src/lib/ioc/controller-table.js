import { includes } from 'lodash'

const table = {}

export function add (token, options) {
  if (contains(token)) {
    Object.assign(table[token], options)
  } else {
    table[token] = options
  }
}

export function get (token) {
  if (!contains(token)) {
    table[token] = {}
  }
  return table[token]
}

export function contains (token) {
  return includes(Object.keys(table), token)
}
