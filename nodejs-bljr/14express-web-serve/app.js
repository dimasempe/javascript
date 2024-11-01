// const http = require("http");
// const fs = require("fs");
// const port = 3000;

// http
//   .createServer((req, res) => {
//     res.writeHead(200, {
//       "Content-Type": "text/html",
//     });

//     const url = req.url;
//     // console.log(url)
//     if (url === "/about") {
//       res.write("<h1>ini adalah halaman about</h1>");
//       res.end();
//     } else if (url === "/contact") {
//       res.write("<h1>ini adalah halaman Contact</h1>");
//       res.end();
//     } else {
//       //   res.write("<h1>Hello World!</h1>");
//       fs.readFile("./index.html", (err, data) => {
//         if (err) {
//           res.writeHead(404);
//           res.write("Error: file not found");
//         } else {
//           res.write(data);
//         }
//         res.end();
//       });
//     }
//   })
//   .listen(port, () => console.log(`Server is listening on port ${port}...`));

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // res.send('Hello World!')
  // res.json({ //untuk mengirim json
  //   nama:'Dimas Maulana',
  //   email: 'dimas@gmail.com',
  //   noHP:'08299320'
  // })
  res.sendFile('./index.html',{root:__dirname})
})

app.get('/about', (req, res) => {
  // res.send('ini adalah halaman about')
  res.sendFile('./about.html',{root:__dirname})
})

app.get('/contact', (req, res) => {
  // res.send('ini adalah halaman contact')
  res.sendFile('./contact.html',{root:__dirname})
})

app.get('/product/:id/category/:idCat',(req,res)=>{
  res.send(`Product ID: ${req.params.id} <br>
    Category ID: ${req.params.idCat} <br>
    Item ID: ${req.query.item}`) //ini yang kata ?item=5
})

app.use('/',(req,res)=>{
  res.status(404)
  res.send('<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})