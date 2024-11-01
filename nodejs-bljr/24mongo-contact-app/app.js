const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { body, validationResult, check } = require("express-validator");
const methodOverride = require("method-override");

const { ObjectId } = require('mongoose').Types;

// Memakai mongoose
require("./utils/db");
const Contact = require("./model/contact");

// ini untuk flash
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

const app = express();
const port = 3000;

app.use(methodOverride("_method"));

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

app.listen(port, () => {
  console.log(`Mongo Contact App | listening at http://localhost:${port}`);
});

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

// Halaman Form tambah contact
app.get("/contact/add", (req, res) => {
  res.render("add-contact", {
    title: "Halaman Add Contact",
    layout: "layouts/main-layout",
  });
});

// Proses Penyimpanan Create (tambah data)
app.post(
  "/contact",
  [
    body("nama").custom(async (value) => {
      const duplikat = await Contact.findOne({ nama: value });
      if (duplikat) {
        throw new Error("Nama contact sudah digunakan!");
      }
      return true;
    }),
    check("email", "Email tidak valid").isEmail(),
    check("noHP", "Nomor HP tidak valid!").isMobilePhone("id-ID"),
  ],
  async (req, res) => {
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
      await Contact.insertMany(req.body).then(() => {
        req.flash("msg", "Data contact berhasil ditambahkan!");
        res.redirect("/contact");
      });
    }
  }
);

// Halaman Detail Contact
app.get("/contact/:id", async (req, res) => {
  // const contact = findContact(req.params.nama);
  const contact = await Contact.findById(req.params.id);
  res.render("detail", {
    title: "Halaman Detail",
    layout: "layouts/main-layout",
    contact,
  });
});

// Proses delete
app.get("/contact/delete/:id", async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    res.send("<h1>404</h1>");
  } else {
    // res.send('oke')
    await Contact.deleteOne({ _id: contact._id }).then(() => {
      req.flash("msg", "Data contact berhasil dihapus!");
      res.redirect("/contact");
    });
  }
});
app.delete("/contact", async (req, res) => {
  // res.send(req.body)
  await Contact.deleteOne({ _id: req.body.id }).then(() => {
    req.flash("msg", "Data contact berhasil dihapus!");
    res.redirect("/contact");
  });
});

// Form edit contact
app.get("/contact/edit/:id", async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.render("edit-contact", {
    title: "Halaman Detail",
    layout: "layouts/main-layout",
    contact,
  });
});

// Proses edit contact
app.put(
  "/contact",
  [
    body("nama").custom(async (value, { req }) => {
      const duplikat = await Contact.findOne({ nama: value });
      if (value != req.body.oldNama && duplikat) {
        throw new Error("Nama contact sudah digunakan!");
      }
      return true;
    }),
    check("email", "Email tidak valid").isEmail(),
    check("noHP", "Nomor HP tidak valid!").isMobilePhone("id-ID"),
  ],
  async (req, res) => {
    // res.send(req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
      res.render("edit-contact", {
        title: "Halaman Edit Contact",
        layout: "layouts/main-layout",
        errors: errors.array(),
        contact: req.body,
      });
    } else {
      await Contact.updateOne(
        { _id: new ObjectId(req.body.id) },
        {
          $set: {
            nama: req.body.nama,
            email: req.body.email,
            noHP: req.body.noHP,
          },
        }
      ).then(() => {
        // kirimkan flash message
        req.flash("msg", "Data contact berhasil ditambahkan!");
        res.redirect("/contact");
      });
    }
  }
);
