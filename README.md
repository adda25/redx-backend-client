<img src="https://webadmin.promfacility.eu/uploads/018e8a986030489ea5fc97190e124277.png" alt="RedX Logo" width="150px">

## Backend registration client

This is the node module for auto registration of backend services
to RedX server.

[RedX Server](https://github.com/adda25/redx)

```js
let redxRegisterRequest = require('@tsadda25/redx-backend-client')

redxRegisterRequest({ 
	src: 'http://localhost:8283', // Redx host
	service: {host: '192.168.1.1', port: 4003, protocol: 'http'}
	secret: '21137818784737'
}, (value) => {
	// True if registration success, otherwise false
	console.log(value)
})
```

For the source, you must use the URL as show: protocol[://]host[:]port.

Secret can be undefined; service.host and service.protocol can be undefined.

Availables protocols are *http* and *https*

If no service host is provided, RedX server will try to get the service IP address
from the request info.

```js
let redxRegisterRequest = require('@tsadda25/redx-backend-client')

redxRegisterRequest({ 
	src: 'http://localhost:8283', // Redx host
	service: {port: 4003}
	secret: '21137818784737'
}, (value) => {
	// True if registration success, otherwise false
	console.log(value)
})
```