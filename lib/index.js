var Hoek = require( "hoek" );

exports.register = function( plugin, options, next ) {

  plugin.ext( "onPreHandler", function( ) {
    return function( request, reply ) {
      var 
      query = request.query || { },
      payload = request.payload || { };

      var mergedPayload = Hoek.merge( query, payload );

      request.humanPayload = mergedPayload; 

      reply.continue( );     
    }
  }( ) );

  next();
};

exports.register.attributes = {
  pkg: require( "../package.json" )
};
