'use strict'
var EventEmitter = require('events');

class clock extends EventEmitter{
    constructor(){
        super();
    
    }

    visit(data){
      setInterval (()=>this.emit('tick',data),1000);
    }
}


var tick = new clock();

tick.on('tick',function(data){
    console.log(data);
});
tick.visit('wohoo');
