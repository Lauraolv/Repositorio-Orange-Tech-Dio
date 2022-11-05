/* Faca um programa para calcular o tempo medio de uma viagem
5 variaveis serao usadas  
1) Preco do etanol
2) Preco do combustivel 
3) O tipo do combustivel 
4) Gasto medio do carro
5) Distancia da viagem

Imprima o valor
*/

const preco_etanol = 3;
const preco_gasosa = 5;
const distancia = 200;
const media_carro = 13;


let tipo = 'gasolina';
let valor_total;

let consumo_total = distancia/media_carro;
if(tipo === 'etanol')
{
    valor_total = consumo_total * preco_etanol;
   
}
else if (tipo === 'gasolina')
{
    valor_total = consumo_total * preco_gasosa;
    
}

console.log('O preco é: ' + valor_total.toFixed(2));
