const fs = require('fs');
const superagent = require('superagent');

const readFilePro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject('Error: Not file found');
            resolve(data);
        });
    });
};


const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if (err) reject('Error: Could not write file');
            resolve('success');
        })
    })
}


//? "superagent" :- is a versatile and beginner-friendly library for handling HTTP requests in Node.js projects.

const getDogPic = async () => {
    try {
        const data = await readFilePro(`${__dirname}/dog.txt`);
        console.log(`Breed: ${data}`);
    
        //* waiting for promises:-
        const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        console.log(res.body.message);
        await writeFilePro('dog-img.txt', res.body.message);

        //* waiting for multiple promises simultaneously:-
        const res1Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        const res2Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        const res3Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);

        const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
        const imgs = all.map(el => el.body.message);
        console.log(imgs);
    
        await writeFilePro('dog-img-multiple-promises.txt', imgs.join('\n'));
        console.log('Random dog image saved to file!');
    } catch (err) {
        console.log(err);
        throw(err); // marks promise as rejected and it can be caught in coming catch block
    }
    return '2: Ready dog pics';
};

// Approach 02: IIFE pattern - immediately invoked function expression (cleaner way)

(async () => {
    try {
        console.log('01: will get dog pics');
        const result = await getDogPic();
        console.log(result);
        console.log('3: Done getting dog pics!');
        
    } catch (err) {
        console.log('ERROR booom');
    }
})();


/* Approach 01: using then & catch:-  

console.log('01: will get dog pics');
getDogPic()
.then(result => {
    console.log(result);
    console.log('3: Done getting dog pics!');
    })
    .catch(err => {
        console.log('ERROR booom');
        });
*/



//---------------------------------------------------------------------------------------------------
//* then catch handlers:-
/*
readFilePro(`${__dirname}/dog.txt`)
    .then(data =>{
        console.log(`Breed: ${data}`);
        return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    })
    .then(res => {
        console.log(res.body.message);
        return writeFilePro('dog-img.txt', res.body.message);
    })
    .then(() => {
        console.log('Random dog image saved to file!');
    })
    .catch(err => {
        console.log(err);
    });
*/



//* simple callback approach before promises : CALLBACK HELL
// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//     if (err) return console.log(err);
//     console.log(`Breed: ${data}`);

    // superagent
    //     .get(`https://dog.ceo/api/breed/${data}/images/random`)
    //     .end((err, res) => {
    //         console.log(res.body.message);

    //         fs.writeFile('dog-img.txt', res.body.message, err => {
    //             console.log('Random dog image saved to file!');
    //         })
    //     })


    
// })


