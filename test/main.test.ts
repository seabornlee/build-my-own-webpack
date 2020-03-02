const Webpack = require('../src/webpack.ts')
const fs = require('fs')
const path = require('path');

describe('Main', () => {
  it('bundle files', () => {
    const webpack = new Webpack(path.resolve(__dirname, './sample-project/webpack.config.js'))
    webpack.run()
    const output = fs.readFileSync(path.resolve(__dirname, 'dist/bundle.js'), 'utf8')
    const expectedBundle = fs.readFileSync(path.resolve(__dirname, 'sample-project/dist/bundle.js'), 'utf8')
    expect(output).toEqual(expectedBundle)
  })
})
