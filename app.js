const express = require('express');

let count = 0;

const app = express();
// app.use(cors({ origin: "*" }));
// we can see how cleaner our code will be. 
// app.get('/', (req, res) => {
//     //res.send('<p>home page</p>');
//     res.sendFile('./views/home.html', { root: __dirname });
// });

// app.get('/about', (req, res) => {
//     //res.send('<p>about page</p>');
//     res.sendFile('./views/about.html', { root: __dirname });
// });

// app.get('/cats.json', (req, res) => {
//     res.sendFile('./data/cats.json', { root: __dirname });
// });

// app.get('/cats.xml', (req, res) => {
//     res.sendFile('./data/cats.xml', { root: __dirname });
// });

// 404 page
app.use((req, res) => {
    count++;
    console.log(count);
    if (count < 3){
        res.send("<p>You get candies</p>");

    }
    else {
        res.send('<p>Too bad for u</p>');
    }
});

// START LISTENING
// app.listen(3000, 'localhost', () => {
//     console.log('listening for requests on port 3000');
// });


// START LISTENING WORLDWIDE
app.listen(3000, '0.0.0.0', () => {
    console.log('listening for requests on port 3000');
});