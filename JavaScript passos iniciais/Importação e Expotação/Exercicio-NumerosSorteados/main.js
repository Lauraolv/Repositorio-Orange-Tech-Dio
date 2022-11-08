/*

Faça um programa que receba os 5 números sorteados  e mostre o maior
número sorteado

entrada 
5
10
23
3
6
 
saída 
23
*/

const { gets , print} = require('./funcoes-auxiliares');

//Dessa forma ela retorna os 5 elementos do vetor
// print(gets());
// print(gets());
// print(gets());
// print(gets());
// print(gets());
let maior = gets();
for(let i = 0; i < 5; i ++)
{
    let comparar = gets();
    if(comparar > maior)
    {
        maior = comparar;
    }
}
print(maior);
//      Solução apresentada pelo professor
//a função print deveria ser "console.log(texto)"

// const numerosSorteados = [];
// for(let i = 0; i < 5; i ++)
// {
//     const numeroSorteado = gets();
//     numerosSorteados.push(numeroSorteado);

// }
// let maiorvalor = 0;
// for(let i = 0; i < 5; i ++)
// {
//     const  numeroSorteado = numerosSorteados[i];
//     if(numeroSorteado > maiorvalor)
//     {
//         maiorvalor = numeroSorteado;
//     }
// }

// print(maiorvalor);
