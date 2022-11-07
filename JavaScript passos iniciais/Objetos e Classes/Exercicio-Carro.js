/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro
{
    marca;
    cor;
    gastos_medio;

    constructor(marca, cor, gastos_medio)
    {
        this.gastos_medio = gastos_medio;
        this.marca = marca;
        this.cor = cor;
    }
    valor_viagem(preco, km_viagem) {
        const resultado = ((preco/this.gastos_medio) * km_viagem);
        console.log(resultado.toFixed(2));
    }
   
}

fit = new Carro('Honda', 'Preto', 12);
fit.valor_viagem(5, 100);