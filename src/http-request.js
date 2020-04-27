'use strict'

const http = require('http')
const https = require('https')

function parse (address) {
    let protocol = address.split('://')[0]
    let port = address.split('://')[1].split(':')[1]
    let host = address.split('://')[1].split(':')[0]
    return {host: host, port: port, protocol: protocol}
}

class HttpRequest {

    register (x, cb) {
        let protocol = parse(x.src).protocol
        protocol == 'https' ? 
            this._request(https, x, cb) :
            this._request(http, x, cb)
    }

    _request (client, x, cb) {
        let src = parse(x.src)
        let _dst = parse(x.dst)
        let dst = _dst.protocol == 'https' ? 'ssl ' + _dst.host + ':' + _dst.port : _dst.host + ':' + _dst.port
        let data = undefined
        if (x.secret == undefined) {
            data = dst
        } else {
            data = dst + '::' + x.secret
        }
        try {
            const options = {
              hostname: src.host,
              port: src.port,
              path: '/redx/register',
              method: 'POST',
              headers: {
                'Content-Type': 'text',
                'Content-Length': data.length
              }
            }
            const req = client.request(options, res => {
                if (res.statusCode == 200) {
                    cb(true)    
                } else {
                    cb(false)    
                }
            }).on('error', (err) => {
                cb(false)
            })
            req.write(data)
            req.end()
        } catch (err) {
            
        }
    }
}

module.exports = new HttpRequest() 