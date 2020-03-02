const fs = require('fs');
const path = require('path');

module.exports = class Webpack {
  constructor(configFilePath) {

  }

  run() {
    const dir = path.resolve(__dirname, '../test/dist/')
    !fs.existsSync(dir) && fs.mkdirSync(dir);
    const filePath = path.resolve(__dirname, '../test/dist/bundle.js')
    fs.writeFileSync(filePath, 'hello', 'utf8')
  }
}
