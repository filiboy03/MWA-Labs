
//using buffering -----  load time 6.5 sec

/*  const fs = require('fs');
const server = require('http').createServer();

server.on('request',(req,res)=>{
    fs.readFile('./britain.jpg',(err,data)=>{
        if (err) throw err;
        res.end(data);
    });
});  */



//using stream ---- load time 5.28 sec
 const fs = require('fs');
const server = require('http').createServer();

server.on('request',(req,res)=>{
    const image = fs.createReadStream('./britain.jpg');
      image.pipe(res);
     }); 

server.listen(8080);
