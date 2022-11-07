/*
 Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]
*/
const lista = [2,3,4,5,6,7,3,2,10,9];
let num = lista[0];
for(let i = 0; i < lista.length; i ++)
{
    if(lista[i] > num)
    {
        num = lista[i];
    }
}
console.log('O maior número é: ' + num);