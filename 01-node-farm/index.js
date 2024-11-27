//* file operations - Synchronously
// require('../01-node-farm/sync'); 

//* file operations - Asynchronously
// require('../01-node-farm/async'); 

//* SERVER:-
const http = require('http'); // giving network abilities - core modules
const url = require('url');
const fs = require('fs');

const replaceTemplate = require('./modules/replaceTemplate'); // our own modules

const slugify = require('slugify'); // third party modules


const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');


const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const slugs = dataObj.map(el => slugify(el.productName, {lower:true}));
console.log(slugs);



//* create the server:-
const server = http.createServer((req, res) => {
    // const pathName = req.url;
    const reqUrl = `http://${req.headers.host}${req.url}`; // Ensure the URL is absolute
    const urll = new URL(reqUrl);
    
    const { searchParams: query, pathname } = urll;
    // console.log(query.get('id'));
    // console.log(pathname);

    // overview page:
    if(pathname === '/' || pathname === '/overview') {
        res.writeHead(200,{ 'Content-type': 'text/html' });

        const cardsHtml = dataObj.map( el =>  replaceTemplate(tempCard, el)).join('') // join makes cardsHtml as string

        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml)
        res.end(output);

    // product page:
    } else if (pathname === '/product') {
        res.writeHead(200,{ 'Content-type': 'text/html' });
        const product = dataObj[query.get('id')];
        const output = replaceTemplate(tempProduct, product);
        res.end(output);

    // API:
    } else if (pathname === '/api') {
        res.writeHead(200,{ 'Content-type': 'application/json' });
        res.end(data);

    // not found:
    } else {
        res.writeHead(404,{
            'Content-type': 'text/html',
            'my-own-header': 'myHeader'
        });
        res.end('<h1>Page not found</h1>');
    }
});

//* start the server:-
server.listen(8000, '127.0.0.1', () => {
    console.log("Listening to requests on port 8000!");
});



