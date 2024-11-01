const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 3000;

// Gunakan EJS
app.set("view engine", "ejs");
app.use(expressLayouts); //hapus ini untuk melihat about dan contact

app.get("/", (req, res) => {
  // res.sendFile('./index.html',{root:__dirname})
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
  res.render("index", { umur: 22, books: books });
});

app.get("/about", (req, res) => {
  // res.sendFile('./about.html',{root:__dirname})
  res.render("about", {
    title: "Halaman About",
    layout: "layouts/main-layout", //harus pake express-ejs-layouts
  });
});

app.get("/contact", (req, res) => {
  // res.sendFile('./contact.html',{root:__dirname})
  res.render("contact", { title: "Halaman Contact" });
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
