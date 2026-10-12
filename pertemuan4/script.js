// Bahasa Pemrograman
// print out
console.log("Hello World!");

//variabel
let nama = "Angel Siahaan";//string
let umur = 18;//integer
let ipk = 3.5;//float
let nilaiHuruf = 'A';//char 
let isActive = true;//boolean

console.log("Nama: " + nama);
console.log("Umur: " + umur);
console.log("IPK: " + ipk);
console.log("Nilai Huruf: " + nilaiHuruf);
console.log("Active: " + isActive);


let angka1 = 10;
let angka2 = 5;
console.log(angka1 == angka2);
angka1++;
console.log(angka1);

if (angka1 === angka2) {
    console.log("Angka sama");
}
else if (angka1 > angka2) {
    console.log("Angka1 lebih besar dari Angka2");
}if (angka1 < angka2) {
    console.log("Angka1 lebih kecil dari Angka2");
}

//loop
//while
let perulangan = 10;
while (perulangan > 0) {
    console.log("Perulangan ke-" + perulangan);
    perulangan--;
}

//for (let perulangan = 0; perulangan <= 10; perulangan++) {
    //console.log(perulangan);}

//alert("Hello KOM B!");
//confirm("Udah makan belum?");
//prompt("Siap untuk UTS?");

console.log(Math.floor(Math.random() * 10));

function sapa(){
    console.log("Halo, selamat datang di kelas KOM B!");
}