module.exports = { _root: '/rand', _socket: false, _cors: true, _parser: [], ready }
const data = require('./codes.json')

/**
 * @param {import('../../class/Rapp')} app
 */
function ready (app) {
  app.get('/', (_, res) => {
    const rand = Math.floor(Math.random() * data.length)
    if (data[rand] === 200) return res.send('wa! sans!')
    else res.sendStatus(data[rand])
  })
}
