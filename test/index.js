var 
Code = require( "code" ),
Hapi = require( "hapi" ),
Lab = require( "lab" );

var 
lab = exports.lab = Lab.script(),
describe = lab.describe,
it = lab.it,
expect = Code.expect;

it( "formats humanPayload for GET", function( done ) {
  var server = new Hapi.Server( );
  server.connection( );
  server.register( require('../'), function( err ) {

    expect( err ).to.not.exist( );

    server.route( { method: "GET", path: "/", handler: function( request, reply ) {  

      expect( request.humanPayload.a ).to.equal( "b" );

      return reply( "ok" ); 
    } } );

    var request = { method: "GET", url: "/?a=b" };

    server.inject( request, function( res ) {
      done( );
    });
  });
});

it( "formats humanPayload for POST", function( done ) {
  var server = new Hapi.Server( );
  server.connection( );
  server.register( require('../'), function( err ) {

    expect( err ).to.not.exist( );

    server.route( { method: "POST", path: "/", handler: function( request, reply ) {  

      expect( request.humanPayload.a ).to.equal( "b" );

      return reply( "ok" ); 
    } } );

    var request = { method: "POST", url: "/?a=b" };

    server.inject( request, function( res ) {
      done( );
    });
  });
});

it( "formats humanPayload for POST with form and query parameters", function( done ) {
  var server = new Hapi.Server( );
  server.connection( );
  server.register( require('../'), function( err ) {

    expect( err ).to.not.exist( );

    server.route( { method: "POST", path: "/", handler: function( request, reply ) {  

      expect( request.humanPayload.a ).to.equal( "b" );
      expect( request.humanPayload.c ).to.equal( "d" );

      return reply( "ok" ); 
    } } );

    var request = { method: "POST", url: "/?a=b", payload: { c: "d" } };

    server.inject( request, function( res ) {
      done( );
    });
  });
});

it( "always lets query parameters win over payload", function( done ) {
  var server = new Hapi.Server( );
  server.connection( );
  server.register( require('../'), function( err ) {

    expect( err ).to.not.exist( );

    server.route( { method: "POST", path: "/", handler: function( request, reply ) {  

      expect( request.humanPayload.a ).to.equal( "d" );

      return reply( "ok" ); 
    } } );

    var request = { method: "POST", url: "/?a=d", payload: { a: "b" } };

    server.inject( request, function( res ) {
      done( );
    });
  });
});

it( "works with empty query string", function( done ) {
  var server = new Hapi.Server( );
  server.connection( );
  server.register( require('../'), function( err ) {

    expect( err ).to.not.exist( );

    server.route( { method: "POST", path: "/", handler: function( request, reply ) {  

      expect( request.humanPayload.a ).to.equal( "b" );

      return reply( "ok" ); 
    } } );

    var request = { method: "POST", url: "/", payload: { a: "b" } };

    server.inject( request, function( res ) {
      done( );
    });
  });
});


