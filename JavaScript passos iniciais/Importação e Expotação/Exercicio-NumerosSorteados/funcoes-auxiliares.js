const entradas = [5, 10, 23,3,6];
let i = 0;
function gets()
{
    const valor = entradas[i];
    i ++;
    return valor;
    

}

function print(texto)
{
    console.log(texto);
}

module.exports = { gets, print };