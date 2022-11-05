/* Faca um programa que calcule a media de tres notas 
de um aluno e classifique-o em:
1- menor que 5, reprovação
2- entre 5 e 7, recuperação
3 - maior que 7, passou
*/

const nota1 = 8, nota2 = 8, nota3 = 10;
const media = (nota2 + nota1 + nota3) / 3;
console.log('A media do aluno é: ' + media.toFixed(2));;
if(media < 5)
{
    console.log('Aluno reprovado');
}
else if(media < 7 && media > 5)
{
    console.log('Aluno em recuperação');
}
else 
{
    console.log('Aluno aprovado');
}
