
var dns = require('dns');

dns.resolve4('www.mum.edu', function search(site, ipaddress) {
   console.log('ipaddress:', ipaddress);
        
   });  
