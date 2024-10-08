(function(){ //alternatif agar variabel i tidak bocor karena js menganut function scope
    for(var i=0;i<10;i++){
        console.log(i)
    }
}()); //pake IIFE atau SIAF
// console.log(i);

// cara mudahnya agar tidak bisa diakses dari luar, pakai let jangan var
for(let i=0;i<10;i++){
    console.log(i)
}
// console.log(i);

