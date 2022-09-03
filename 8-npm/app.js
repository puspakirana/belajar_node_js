const validator = require('validator');
const chalk = require('chalk');

//VALIDATOR
// console.log(validator.isEmail('puspakirana@gmail.com'));
// console.log(validator.isMobilePhone('0812345678', 'id-ID'));
// console.log(validator.isNumeric('0712345678a'));

//CHALK
console.log(chalk.bgBlue.italic.black('Hello'));
const pesan = 'Hello world';
console.log(chalk.bgRed.black(pesan));
const nama = "Jane"
const pesan2 = chalk `Lorem, ipsum dolor {bgRed.italic sit amet} consectetur {bgGreen.strikethrough adipisicing} elit. Nama saya : ${nama}`
console.log(pesan2);

