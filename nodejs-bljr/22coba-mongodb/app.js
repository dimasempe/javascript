const { MongoClient,ObjectId } = require("mongodb");
const uri = "mongodb://localhost:27017";
const dbName = "wpu";

const client = new MongoClient(uri);

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  //   const collection = db.collection("mahasiswa");

  // Mencoba memasukkan data ke database wpu dengan collection mahasiswa
  //   ini untuk 1 data
  //   await collection.insertOne({
  //     nama: "Dimas Maulana",
  //     email: "dimas.maulanaputra13@gmail.com",
  //   });

  //   ini untuk banyak data
  //   await collection.insertMany([
  //     {
  //       nama: "Bisma Arumsyach",
  //       email: "bisma@gmail.com",
  //     },
  //     { nama: "Handy Hafidz", email: "handy@gmail.com" },
  //   ]);

  // Menampilkan semua data yang ada di client
//   console.log(await
//     db
//       .collection("mahasiswa")
//       .find()
//       .toArray((error, result) => {
//         console.log(result);
//       })
//   );

// Menampilkan data yang mengandung nama Dimas
// console.log(await
//     db
//       .collection("mahasiswa")
//       .find({nama: { $regex: "Dimas", $options: "i" }})
//       .toArray((error, result) => {
//         console.log(result);
//       })
//   );

// Mengupdate data satu
// await db.collection('mahasiswa').updateOne({
//     _id: new ObjectId('6721b5c606ac6051a4cd111f')
// },
// {
//     $set:{
//         nama:'Jokowi Dodo'
//     }
// })

// Menghapus data
await db.collection('mahasiswa').deleteOne({
    _id: new ObjectId('6721b5c606ac6051a4cd111f')
}).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})
  // the following code examples can be pasted here...

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
