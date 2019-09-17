const path = require('path')

module.exports = {
    MOCK: true,
    host: '0.0.0.0',
    port: '8090',
    resolve: (url) => path.resolve(__dirname, '..', url),
    join: (url) => path.join(__dirname, '..', url)
}