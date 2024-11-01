const express = require('express')
const expressLayouts = require('express-ejs-layouts')

// Memakai mongoose
require('./utils/db')
const Contact = require('./model/contact')

// ini untuk flash
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");


const app = express()
const port = 3000

app.set("view engine", "ejs");

app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Konfigurasi flash
app.use(cookieParser("secret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

app.listen(port,()=>{
    console.log(`Mongo Contact App | listening at http://localhost:${port}`)
})

// Halaman Home
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
    res.render("index", {
      umur: 22,
      books: books,
      title: "Halaman Index",
      layout: "layouts/main-layout",
    });
  });

  // Halaman About
  app.get("/about", (req, res) => {
    res.render("about", {
      title: "Halaman About",
      layout: "layouts/main-layout",
    });
  });

  // Halaman Contact
  app.get("/contact", async (req, res) => {
    // Contact.find().then((contact)=>{res.send(contact)})
    const contacts = await Contact.find();
    res.render("contact", {
      title: "Halaman Contact",
      layout: "layouts/main-layout",
      contacts,
      msg: req.flash("msg"),
    });
  });

  // Halaman Detail Contact
  app.get("/contact/:id",async (req, res) => {
    // const contact = findContact(req.params.nama);
    const contact = await Contact.findById(req.params.id);
    res.render("detail", {
      title: "Halaman Detail",
      layout: "layouts/main-layout",
      contact,
    });
  });