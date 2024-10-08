// cara membuat object pada javascript

// 1. Object Literal
let mahasiswa = {
    nama : 'Dimas Maulana Putra',
    energi : 10, //ini properti (isinya nilai)
    makan : function(porsi){
        this.energi = this.energi+porsi
        console.log(`Halo ${this.nama}, selamat makan!`) //bisa pake 
    }

}

// 2. Function Declaration
function Mahasiswa(nama,energi){ //nama fungsi diawali huruf besar 
    //untuk menandai klo itu object(opsional)
    let mahasiswa={}
        mahasiswa.nama = nama;
        mahasiswa.energi = energi;
        mahasiswa.makan = function(porsi){
            this.energi += porsi;
            console.log(`Aloo ${this.nama}, selamat makan!`)
        }
        mahasiswa.main = function(jam){
            this.energi -= jam;
            console.log(`Aloo ${this.nama}, selamat bermain!`)
        }
        return mahasiswa
}
let dimas = Mahasiswa('Dimas',15);

// 3. Constructor Function
function Mahasiswa2(nama,energi){ //nama fungsi diawali huruf besar 
    //untuk menandai klo itu object(opsional)
    // let mahasiswa={}
        this.nama = nama;
        this.energi = energi;
        this.makan = function(porsi){
            this.energi += porsi;
            console.log(`Aloo ${this.nama}, selamat makan!`)
        }
        this.main = function(jam){
            this.energi -= jam;
            console.log(`Aloo ${this.nama}, selamat bermain!`)
        }
        // return mahasiswa
}
let dimas2 = new Mahasiswa2('Dimas2',20)