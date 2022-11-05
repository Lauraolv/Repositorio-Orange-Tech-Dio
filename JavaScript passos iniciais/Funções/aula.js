function saymyname (name)
{
    console.log('Your name is: ' + name);
}



function quadrado(valor)
{
    return Math.pow(valor, 2);
}



function juros (valor, percentual)
{
    const valoracrescido = (percentual/100) * valor;
    return valoracrescido + valor;
}



function main()
{
    saymyname('Laura');
    saymyname('Bela');


    const resultado = quadrado(10);
    console.log('O resultado é: ' + resultado);


    console.log('Juros de 10% sobre 200 é: ' + juros(200,10));
}

main();