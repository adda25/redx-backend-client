<img src="https://webadmin.promfacility.eu/uploads/018e8a986030489ea5fc97190e124277.png" alt="RedX Logo" width="150px">

## Backend registration client

This is the node module for auto registration of backend services
to RedX server.

[RedX Server](https://github.com/adda25/redx)

```js
let redxRegisterRequest = require('@tsadda25/redx-backend-client')

redxRegisterRequest({ 
	src: 'http://localhost:8283', // Redx host
	dst: 'http://localhost:4003', // Service host (this)
	secret: '21137818784737'
}, (value) => {
	// True if registration success, otherwise false
	console.log(value)
})
```

You must use the URL as show: protocol[://]host[:]port
Availables protocols are *http* and *https*