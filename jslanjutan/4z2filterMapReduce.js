const angka = [-1,8,9,1,4,-5,-4,3,2,9];

// mencari angka >=3
// for
const newAngka = [];
for(let i=0; i<angka.length;i++){
    if(angka[i]>=3){
        newAngka.push(angka[i]);
    }
}
console.log(newAngka)

// filter
const newAngka2 = angka.filter(function(a){
    return a >= 3;
});
console.log(newAngka2);

// filter (pakai arrow function)
const newAngka3 = angka.filter(a => a >= 3);
console.log(newAngka3);

// map
const newAngka4 = angka.map(a => a*2);
console.log(newAngka4);

// reduce
// jumlahkan seluruh elemen pada array
const newAngka5 = angka.reduce((accumulator, currentValue) => accumulator+currentValue,0)
console.log(newAngka5)

// method chaining
// cari angka yg > 5, lalu hasilnya *3, lalu tambahkan
const hasil = angka.filter(a => a>5) //[8,9,9]
                    .map(a => a*3) // [24,27,27]
                    .reduce((acc,cur) => acc+cur) //78
console.log(hasil)
