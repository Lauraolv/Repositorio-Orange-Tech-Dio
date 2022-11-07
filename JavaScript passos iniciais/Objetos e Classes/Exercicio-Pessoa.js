/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class Pessoa{
    nome;
    peso;
    altura;
    constructor(altura, peso, nome)
    {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }
    toString()
    {
        console.log('Meu nome é: ' + this.nome + ' tenho ' + this.altura + ' cm e peso '  + this.peso + 'kg');
    }
    imc()
    {
        return (this.peso / (Math.pow(this.altura, 2)));
    }
    classifica_imc()
    {
        const result = this.imc();
            if(result < 18.5)
        {   
            console.log('Abaixo do peso ');
        }
        else if(result >= 18.5 && result < 25)
        {
            console.log('Peso normal');
        }
        else if(result >= 25 && result < 30)
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
}

jose = new Pessoa(1.75,70, 'jose');
const resultado = jose.imc();
jose.toString();
console.log('Meu imc é: ' + resultado.toFixed(2));
jose.classifica_imc();