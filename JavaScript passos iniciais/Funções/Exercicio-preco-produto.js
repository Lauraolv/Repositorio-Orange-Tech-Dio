/* Elabora um algoritmo que calcule o que deve ser pago por um 
produto, considerando o preço normal da etiqueta e o meio de pa-
gamento.

Código de condição 
- À vista débito- 10% desconto 
- À vista dinheiro, pix - 15% desconto 
- Em duas vezes, preço normal
- Acima de duas vezes - juros de 10 %
Utilize funções
*/

function main()
{
    const preco = 80;
    const condicao = 'pix';
    if(condicao === 'debito')
    {
        console.log('O preço em débito é: ' + aplicadesconto(10, preco));
    }
    else if(condicao === 'pix' || condicao === 'dinheiro')
    {
        console.log('O preço em pix ou dinheiro é: ' + aplicadesconto(15, preco));
    
    }
    else if(condicao === 'acima de duas vezes')
    {
        console.log('O preço em mais de duas vezes é: ' + aplicajuros(15, preco));
    }
    else
    {
        console.log('O preço em duas vezes é: ' + preco);
    }
}

function aplicadesconto(juros, preco)
{
   return ( preco -  (preco * (juros/100)));
}
function aplicajuros(juros, preco)
{
    return ( preco +  (preco * (juros/100)));
}
main();