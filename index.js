'use strict'

let HttpRequest = require('./src/http-request')

module.exports = (x, cb) => {
	HttpRequest.register(x, cb)
}