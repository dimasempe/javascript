// for..of Array(untuk object ittereble)
const mhs = ['Dimas','Maulana','Putra'];
// pakai for
// for(let i=0;i<mhs.length;i++){
//     console.log(mhs[i])
// }

// pakai forEach()
// mhs.forEach((m,i)=>console.log(m,i))

// pakai for..of
// for(const m of mhs){
//     console.log(m);
// }

// for..of String
// const nama='Dimas Maulana'
// for(const n of nama){
//     console.log(n)
// }

// for(const [i,m] of mhs.entries()){
//     console.log(`${m} adalah mahasiswa ke-${i+1}`);
// };

// for..of NodeList
// const liNama = document.querySelectorAll('.nama');
// console.log(liNama);
// // liNama.forEach(n=>console.log(n.textContent));
// for(n of liNama){
//     console.log(n.innerHTML)
// }

// for..of arguments
function jumlahkanAngka(){
    // return [1,2,3,4,5].reduce((a,i)=>a+i)
    let jumlah = 0
    for (a of arguments){
        jumlah+=a;
    }
    return jumlah
}
console.log(jumlahkanAngka(1,2,3,4,5))

// for..in
const mahasiswa = {
    nama: 'Dimas Maulana',
    umur: 22,
    email: 'dimas.maulanaputra13@gmail.com'
}
for(m in mahasiswa){
    console.log(m)
    console.log(mahasiswa[m])
}

