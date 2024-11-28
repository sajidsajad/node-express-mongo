const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    //* solution 01: load all file in memory but it slows us down if file is large
    // fs.readFile('test-file.txt', (err, data) => {
    //     if(err) console.log(err);
    //     res.end(data);
    // })


    //* solution 02: Streams
    // const readable = fs.createReadStream('test-file.txt');
    // readable.on('data', chunk => { // 'data' is readable event
    //     res.write(chunk) // res is writable stream 
    // });
    // readable.on('end', () => { // 'end' is readable event
    //     res.end();
    // });
    // readable.on('error', err => {
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end("File Not Found!");
    // });


    //* solution 03: using pipe because of 'backpressure' problem
    const readable = fs.createReadStream("test-file.txt");
    readable.pipe(res);

});


server.listen(8000, '127.0.0.1', () => {
    console.log('Listening...')
});