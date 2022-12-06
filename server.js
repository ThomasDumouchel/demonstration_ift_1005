
const http = require('http');
const fs = require('fs');

//------------- 1. Create a server -----------------
// const server = http.createServer((req, res) => {
//     console.log('request received');
// });

// type http://localhost:3000 in browser, and you will see 'request received' in terminal

// ------------ 2. Get url ----------------
// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);
// });

// ------------ 3. Send html response ----------------
// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<p><b>hello world</b></p>');
//     res.write('<p><b>hello world</b></p>');
//     res.end();
// });

// ------------ 4. Send html response (whole file) ----------------
// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');

//     fs.readFile('./views/home.html', (err, data) => {
//         if (err) {
//             console.log(err);
//             res.end();
//         } else {
//             //res.write(data);
//             res.end(data);
//         }
//     });
// });

// ------------ 5. Do some routing ----------------

const server = http.createServer((req, res) => {
    let path = './views';
    res.setHeader('Content-Type', 'text/html');

    switch (req.url) {
        case '/':
            path += '/home.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += '/about.html';
            res.statusCode = 200;
            break;
        default:
            path += '/404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            //res.write(data);
            res.end(data);
        }
    });
});

// START LISTENING
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});