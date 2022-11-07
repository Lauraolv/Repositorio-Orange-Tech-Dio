//const alunos = ['Laura', 'Bela', 'Thiago'];
//console.log(alunos[0]); imprimir uma posição
//  Maneiras diferentes de adicionar
//alunos[4] = 'Eu';
//alunos.push(20);
//console.log(alunos);
//alunos.pop(); //retira o ultimo elemento
//alunos.shift(); //retira o primeiro elemento

const notas = [];

notas.push(5);
notas.push(8);
notas.push(9);
notas.push(3);
notas.push(5.5);
let soma = 0;
for(let i = 0; i < notas.length; i ++)
{
    soma = soma + notas[i];
}
console.log('A media é: ' + ((soma/notas.length).toFixed(2)));

const nome = 'Laura Oliveira Ribeiro';
for(let i = 0;i < nome.length; i ++)
{
    console.log(nome[i]);
}
