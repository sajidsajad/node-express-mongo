const fs = require('fs');

console.log('------- Non-blocking, ASYNCHRONOUS way -------- ');
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    if (err) return console.log('ERROR!');
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
            console.log(data3);
            fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
                console.log("File is written asyncronously!")
            })
        })
    })
})
console.log('will-read');


