module.exports = {
  presets: ['@babel/env'],
  sourceMaps: 'inline',
  plugins: [
    ['@babel/plugin-proposal-decorators', {
      'legacy': true
    }]
  ]
}
