const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require('morgan')

const app = express();
const port = 3000;

// Gunakan EJS
app.set("view engine", "ejs");

// Third Party Middleware
app.use(expressLayouts); 
app.use(morgan('dev'))

// Built-in middleware
app.use(express.static('public'))

// Application Level Middleware
app.use((req,res,next)=>{
  console.log('Time: ',Date.now())
  next() //harus ada next()
})
app.use((req,res,next)=>{
  console.log('Ini middleware kedua') //sesuai urutan
  next() //harus ada next()
})

app.get("/", (req, res) => {
  const books = [
    {
      judul: "Sirah Nabawiyah",
      harga: 20000,
    },
    {
      judul: "Habis Gelap Terbitlah Terang",
      harga: 15000,
    },
    {
      judul: "PPKN",
      harga: 8000,
    },
  ];
  // const books = [

  // ];
  res.render("index", {
    umur: 22,
    books: books,
    title: "Halaman Index",
    layout: "layouts/main-layout",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "Halaman About",
    layout: "layouts/main-layout", 
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Halaman Contact",
    layout: "layouts/main-layout",
  });
});

app.get("/product/:id/category/:idCat", (req, res) => {
  res.send(`Product ID: ${req.params.id} <br>
    Category ID: ${req.params.idCat} <br>
    Item ID: ${req.query.item}`);
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
