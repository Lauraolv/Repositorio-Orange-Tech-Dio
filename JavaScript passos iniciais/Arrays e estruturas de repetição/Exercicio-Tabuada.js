/*
1) Crie um programa que dado um número imprima a sua tabuada.
*/
const num = 9;

console.log('A tabuada do número ' + num + ' é: ');
for (let i = 0; i <= 10; i++) {
    console.log(num + ' X ' + i + ' = ' + (num * i));  
}