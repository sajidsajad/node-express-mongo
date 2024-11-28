const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
    constructor() {
        super();
    }
}

const myEmitter = new Sales();

myEmitter.on('newSale', () => {
    console.log('There was a new sale');
})

myEmitter.on('newSale', () => {
    console.log('Customer name: Khan');
})

myEmitter.on('newSale', stock => {
    console.log(`There are now ${stock} items left!`)
})

myEmitter.emit('newSale', 9);


//* *********************************************************************************************


const server = http.createServer();

server.on('request', (req, res) => {
    console.log('Req received');
    res.end('Request received');
})


server.on('request', (req, res) => {
    console.log('Another Req received');
})


server.on('close', () => {
    console.log('server closed');
})

server.listen(8000, '127.0.0.1', ()=> {
    console.log('waiting for Request...');
})


//||||||||||||||||||||||||||||||||||||| NOTES |||||||||||||||||||||||||||||||||||||||||

//* on() method:-
//? The on() method is part of the EventEmitter class, which is provided by the events module in Node.js. The method registers a listener function that is called every time the specified event is emitted.

//* Syntax:-
//! eventEmitter.on(eventName, listenerFunction);

//? eventName: A string representing the name of the event to listen for.
//? listenerFunction: A function to execute whenever the event is emitted.



