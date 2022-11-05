/* Formúla do imc = peso / (altura * altura)
Elabore um programa que dado o peso e a altura, retorne o imc 
com as seguintes classificações

- Abaixo do peso - 18.5
- Entre 18.5 e 25 - peso normal 
- Entre 25 e 30 - acima do peso
- Entre 30 e 40 - obeso
- Acima de 40 - obesidade grave

Faça com funções
*/
// Eu criei uma função sem nome e já executei ela em seguida, como
// ela está em parentêsis (isolada), eu não consigo chamar ela em outro lugar
(function ()
{
    const peso = 63, altura = 1.68;
    
    console.log('O IMC é: ' + imc(altura, peso));
    classificacao_imc(imc(altura,peso));

})();


function imc(altura, peso)
{
    const imc = peso / Math.pow(altura, 2);
    return imc.toFixed(2);
}

function classificacao_imc(imc)
{
    if(imc < 18.5)
    {   
        console.log('Abaixo do peso ');
    }
    else if(imc >= 18.5 && imc < 25)
    {
        console.log('Peso normal');
    }
    else if(imc >= 25 && imc < 30)
    {
        console.log('Acima do peso ');
    }
    else if(imc >= 30 && imc < 40)
    {
        console.log('Obesidade ');
    }
    else 
    {
        console.log('Obesidade grave');
    }
}

