// 2. membuat Object function declaration

function buatObjectMahasiswa(nama,npm,email,jurusan){
    var mhs = {}; //deklarasi object

    mhs.nama = nama; 
    mhs.npm = npm;
    mhs.email = email;
    mhs.jurusan = jurusan;

    return mhs;
}

var mhs3 = buatObjectMahasiswa('Dimas M',50420379,'bebas@yahoo.com','Informatika');

// 3. membuat Object dengan constructor (tanpa membuat class)
// biasanya pake huruf besar constructor
function Mahasiswa(nama,npm,email,jurusan){
    //var this = {}; 
    this.nama = nama; 
    this.npm = npm;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
}
var mhs4 = new Mahasiswa('Doni', 909090,'auah@yahoo.com','Sistem Informasi') //instansiasi


