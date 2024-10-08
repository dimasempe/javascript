// Rest Parameter
function myFunc(a,b,...myArgs){
    return `a = ${a}, b = ${b}, myArgs = ${myArgs}`
}
console.log(myFunc(1,2,3,4,5))

function jumlahkan(...angka){
    // 1. pake for of
    // let total = 0
    // for(const a of angka){
    //     total += a
    // }
    // return total

    // 2. pake fungsi
    return angka.reduce((a,b) => a+b)
}
console.log(jumlahkan(1,2,3,4,5))

// array destructuring
const kelompok1 = ['Shandika', 'Doddy', 'Erik', 'Fajar', 'Hendra']
const [ketua, wakil, ...anggota] = kelompok1
console.log(anggota)

// object destructuring
const team = {
    pm: 'Shandika',
    frontEnd1: 'Doddy',
    frontEnd2: 'Erik',
    backEnd: 'Fajar',
    ux: 'Hendra',
    devOps: 'Ferry'
}
const {pm, ...myTeam} = team
console.log(pm)

// filtering
function filterBy(type, ...nilai){
    return nilai.filter(v => typeof v === type)
}
console.log(filterBy('number',1,2,'Shandika',false,10,true,'Doddy'))
console.log(filterBy('string',1,2,'Shandika',false,10,true,'Doddy'))
console.log(filterBy('boolean',1,2,'Shandika',false,10,true,'Doddy'))
