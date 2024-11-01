const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const {loadContact,findContact} = require('./utils/contacts.js')

const app = express();
const port = 3000;

// Gunakan EJS
app.set("view engine", "ejs");

// Third Party Middleware
app.use(expressLayouts); 

// Built-in middleware
app.use(express.static('public'))

// Application Level Middleware


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
  const contacts = loadContact()
  res.render("contact", {
    title: "Halaman Contact",
    layout: "layouts/main-layout",
    contacts
  });
});

app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama)
  res.render("detail", {
    title: "Halaman Detail",
    layout: "layouts/main-layout",
    contact
  });
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
