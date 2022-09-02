// const nama = 'Puspa';
// const cetakNama = (nama) => `Hi, nama saya ${nama}`;
// console.log(cetakNama(nama));

//memanggil file lain, bisa pake .js bisa tidak
// require('./coba.js');
// const fs = require('fs') //core module
// const cetakNama = require('./coba'); // mengimport local modul, ciri : ada ./
// const moment = require('moment') //tidak ada di core module, jd cari di third party module / npm module / node_modules

const coba = require('./coba');

console.log("Hello you");

console.log(coba.cetakNama('Puspa'), coba.PI);

console.log(coba.mahasiswa.cetakMhs());

console.log(new coba.Orang);