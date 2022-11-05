/*
Faça um programa que calcule o valor de combustível de uma viagem
Variáveis:
1 - Preço combustível
2 - Valor médio de gasto do carro
3 - Distância em KM

Imprima no console
*/

const preco_combustivel = 4.70;
const media_carro = 12;
const km_viagem = 100;

const consumido = km_viagem/media_carro;
const gastos = consumido * preco_combustivel;
console.log("Valor gasto: " + gastos.toFixed(2));
