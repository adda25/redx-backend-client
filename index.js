'use strict'

let HttpRequest = require('./src/http-request')

function req (x, cb) {
	if (x.repeat == true) {
		HttpRequest.registerWithLoop(x, cb, x.repeatTime)	
	} else {
		HttpRequest.register(x, cb)	
	}
}

module.exports = (x, cb) => {
	if (typeof x.src == 'array' || typeof x.src == 'object') {
		x.src.forEach(function (s) {
			const newX = {
				src: s,
				service: x.service,
				secret: x.secret,
				repeat: x.repeat,
				repeatTime: x.repeatTime,
			}
			req(newX, cb)
		})
	} else {
		req(x, cb)
	}
}