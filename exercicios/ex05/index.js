/*let omedaio = 12
let omedaia = 10 
let resultado = omedaia + omedaio
console.log(resultado)*/



const alunosAprovados = [{
    Nome:"vitor",
    Nota: 80,

    Nome:"Lucas",
    Nota: 20,
}];

function alunosAprovadoss(array, media){
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(media >= alunosAprovados.Nota){
            return alunosAprovados
        }
    }};