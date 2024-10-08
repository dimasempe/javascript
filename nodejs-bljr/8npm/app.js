// console.log('Halo Dimss')
import validator from 'validator';
import chalk from 'chalk';
// const validator = require('validator');
// const chalk = require('chalk');


// console.log(validator.isEmail('dimasmaulanaputra13@gmail.com'))
// console.log(validator.isMobilePhone('081297018808','id-ID'))
// console.log(validator.isNumeric('08129701880A8'))

console.log(chalk.italic.black.bgBlue(' biru '))

// const pesan = chalk`Lorem ipsum dolor {bgRed sit amet} consectetur adipisicing elit. Doloremque, quidem.`;
// console.log(pesan);

const coloredText = chalk.bgYellowBright.dim`sit amet`;
const pesan = `Lorem ipsum dolor ${coloredText} consectetur adipisicing elit. Doloremque, quidem.`;

console.log(pesan);
console.log(coloredText)

console.log(chalk`Lorem ipsum dolor {bgRed si } consectetur adipisicing elit. Doloremque, quidem.`);