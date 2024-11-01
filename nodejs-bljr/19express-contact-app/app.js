const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const {
  loadContacts,
  findContact,
  addContact,
  cekDuplikat,
  deleteContact,
  updateContact
} = require("./utils/contacts.js");
const { body, validationResult, check } = require("express-validator");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

const app = express();
const port = 3000;

// Konfiguransi flash
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
// Gunakan EJS
app.set("view engine", "ejs");

// Third Party Middleware
app.use(expressLayouts);

// Built-in middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

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

// melihat semua contact
app.get("/contact", (req, res) => {
  const contacts = loadContacts();
  res.render("contact", {
    title: "Halaman Contact",
    layout: "layouts/main-layout",
    contacts,
    msg: req.flash("msg"),
  });
});

// Form tambah contact
app.get("/contact/add", (req, res) => {
  res.render("add-contact", {
    title: "Halaman Add Contact",
    layout: "layouts/main-layout",
  });
});

// Proses tambah contact
app.post(
  "/contact",
  [
    body("nama").custom((value) => {
      const duplikat = cekDuplikat(value);
      if (duplikat) {
        throw new Error("Nama contact sudah digunakan!");
      }
      return true;
    }),
    check("email", "Email tidak valid").isEmail(),
    check("noHP", "Nomor HP tidak valid!").isMobilePhone("id-ID"),
  ],
  (req, res) => {
    // console.log(req.body)
    // res.send(req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
      res.render("add-contact", {
        title: "Halaman Add Contact",
        layout: "layouts/main-layout",
        errors: errors.array(),
      });
    } else {
      addContact(req.body);
      // kirimkan flash message
      req.flash("msg", "Data contact berhasil ditambahkan!");
      res.redirect("/contact");
    }
  }
);

// Form edit contact
app.get("/contact/edit/:nama", (req, res) => {
  const contact = findContact(req.params.nama);
  res.render("edit-contact", {
    title: "Halaman Detail",
    layout: "layouts/main-layout",
    contact,
  });
});

// Proses edit contact
app.post(
  "/contact/update",
  [
    body("nama").custom((value,{req}) => {
      const duplikat = cekDuplikat(value);
      if (value != req.body.oldNama && duplikat) {
        throw new Error("Nama contact sudah digunakan!");
      }
      return true;
    }),
    check("email", "Email tidak valid").isEmail(),
    check("noHP", "Nomor HP tidak valid!").isMobilePhone("id-ID"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
      res.render("edit-contact", {
        title: "Halaman Edit Contact",
        layout: "layouts/main-layout",
        errors: errors.array(),
        contact:req.body
      });
    } else {
      updateContact(req.body.oldNama,req.body);
      // kirimkan flash message
      req.flash("msg", "Data contact berhasil ditambahkan!");
      res.redirect("/contact");
    }
  }
);

// Proses delete
app.get("/contact/delete/:nama", (req, res) => {
  const contact = findContact(req.params.nama);
  if (!contact) {
    res.status(404);
    res.send("<h1>404</h1>");
  } else {
    // res.send('oke')
    deleteContact(req.params.nama);
    req.flash("msg", "Data contact berhasil dihapus!");
    res.redirect("/contact");
  }
});

// Proses detail
app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);
  res.render("detail", {
    title: "Halaman Detail",
    layout: "layouts/main-layout",
    contact,
  });
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
