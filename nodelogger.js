console.log(__filename);
console.log(__dirname);
    
const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message){
        console.log(message);
    
    this.emit('messageLogged', { id: 1, url: 'http://' });
    }
}


module.exports = Logger;



const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);



const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//console.log('Total Memory: ' + totalMemory); or this bellow

console.log(`Total memory: ${totalMemory}`)
console.log(`Free memory: ${freeMemory}`)




const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files);

fs.readdir('./', function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
});



const EvenetEmitter = require('events');
const emitter = new EvenetEmitter();


emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

