var fs = require('fs');
var zlib = require('zlib');
/* var zip = zlib.createGzip();
var readableZ = fs.createReadStream(  __dirname + '/source.txt' );
var compressedZ = fs.createWriteStream( __dirname +  '/destination.txt.gz' );

readableZ.pipe(zip).pipe(compressedZ); */

var unzip = zlib.createGunzip();

var readable = fs.createReadStream( __dirname +  '/destination.txt.gz' );
var compressed = fs.createWriteStream(  __dirname + '/source2.txt' );


readable.pipe(unzip).pipe(compressed);