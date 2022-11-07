// const laura = 
// {
//     nome: 'Laura',
//     idade: 20,
//     descrever : function()
//     {
//         console.log('Meu nome é: ' + this.nome + ' tenho ' + this.idade + ' anos'+ ' e '  + laura.altura + ' cm');
//     }
// };
// laura.altura = 168;
// laura.descrever();
// // delete laura.idade; - usadado para deletar um elemento
// laura.nome = 'Bela';
// laura.descrever();
// //para reescrever uma função é da mesma forma
// laura.descrever = function()
// {
//     console.log(`Meu nome é: ${this.nome}`);//outra forma de mostrar
// }
// laura.descrever();

// const atributo = 'idade';
// console.log(laura[atributo]);
// console.log(laura['idade']);
// É preciso fazer uma classe genérica e não um objeto específico
class Pessoa
{
    name;
    age;
    ano_nascimento;
    constructor(nome, idade)
    {
        this.name = nome;
        this.age = idade;
        this.ano_nascimento = (2022 - idade);
    }

    toString()
    {
        console.log('Meu nome é: ' + this.name + ' ,tenho ' + this.age + ' anos' + ', nasci em ' + this.ano_nascimento);
    }
}

const matheus = new Pessoa('Matheus','19');
const laura = new Pessoa('Laura','20');


function compararPessoas(p1, p2)
{
    if(p1.age > p2.age)
    {
        console.log(`${p1.name} é mais velho que ${p2.name}`);
    }
    else if(p1.age < p2.age)
    {
        console.log(`${p1.name} é mais novo que ${p2.name}`);
    }
    else{
        console.log(`${p1.name} e ${p2.name} tem a mesma idade`);
    }
}
compararPessoas(laura, matheus);