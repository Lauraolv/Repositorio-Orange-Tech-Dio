/* Elabora um algoritmo que calcule o que deve ser pago por um 
produto, considerando o preço normal da etiqueta e o meio de pa-
gamento.

Código de condição 
- À vista débito- 10% desconto 
- À vista dinheiro, pix - 15% desconto 
- Em duas vezes, preço normal
- Acima de duas vezes - juros de 10 %
*/
const preco = 80;
const condicao = 'debito';
const resultado = 0;
if(condicao === 'debito')
{
    console.log('O preço é: ' + ( preco -  (0.10 * preco)));
}
else if(condicao === 'pix' || condicao === 'dinheiro')
{
    console.log('O preço é: ' + (preco -  (0.15 * preco)));
    
}
else if(condicao === 'acima de duas vezes')
{
    console.log('O preço é: ' + (preco +  (0.10 * preco)));
}
else
{
    console.log('O preço é: ' + preco);
}
