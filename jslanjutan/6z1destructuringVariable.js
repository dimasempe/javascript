// Destructuring Variable / Assignment

// Destructuring Array
const perkenalan = ['Halo','nama','saya','Dimas Maulana'];
// const salam = perkenalan[0]
// const nama = perkenalan[3]
// console.log(salam)
// console.log(nama)

// const [salam,satu,dua,nama]=perkenalan;
const [salam,,,nama]=perkenalan; //ini untuk di skip
console.log(salam)
console.log(nama)

// swap items
let a = 1;
let b = 2;
console.log(a);
[a,b] = [b,a]
console.log(a);

// return value pada function
function coba(){
    return [3,4]
}
const [c,d] = coba();
console.log(c)
console.log(d)

// rest parameter
const [e,f,,h,...values] = [5,6,7,8,9,10,11,12]
console.log(e)
console.log(f)
console.log(h)
console.log(values[0])

// Destructuring Object
const mhs={
    nama2: 'Dimas Maulana Putra',
    umur: 22
}
const {umur,nama2} = mhs;
console.log(nama2);

// Assignment tanpa deklarasi object
({umur2,nama3} = {
    nama3: 'Dimas Maulana Putra',
    umur2: 23
});
console.log(umur2);

// Assign ke variable baru
const mhs2={
    nama3: 'Dimas Maulana Putra (var baru)',
    umur3: 22
}
const {umur3:u,nama3:n} = mhs2;
console.log(n);

// memberikan default value
const mhs3={
    nama3: 'Dimas Maulana Putra (var baru)',
    umur3: 22
}
const {umur3:mur,nama3:nam, email:emai='email@default'} = mhs3;
console.log(emai);

// rest parameter
const mhs4={
    nama: 'Dimas Maulana Putra (var baru)',
    umur3: 22,
    apakek:'Coba rest parameter'
};
const {nama:nama7, email:emai7='email@default',...values2} = mhs4;
console.log(values2.apakek);

// mengambil field pada object, setelah dikirim sebagai parameter pada function
const mhs100={
    id:13,
    nama: 'Dimas Maulana Putra (var baru)',
    umur3: 22,
    apakek:'Coba rest parameter'
};
function getIdMhs100({id,apakek}){
    return id
}
console.log(getIdMhs100(mhs100))