# hapi-human-payload

![hapi-human-payload](../master/hapi-human-payload.gif?raw=true)

Payloads should be more forgiving, more human. This plugin lets your users send their payload as POST data or GET query parameters. It is combined into one 'human' payload.

## Usage

```javascript
var server = new Hapi.Server();
server.connection( { port: process.env.PORT, host: "0.0.0.0", routes: { cors: true } } );

server.register({
  register: require( "hapi-human-payload" ),
  options: { }
}, function ( err ) {
  if ( err ) throw err;
})
```

Requires Hapi 8 or greater.


