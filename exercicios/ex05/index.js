/*let omedaio = 12
let omedaia = 10 
let resultado = omedaia + omedaio
console.log(resultado)

const PESSOA = {
    nome:"vitor",
    idade: 20 ,
    peso: 20 + "kg", 
}

console.log(PESSOA.nome)

 Calcule a média de diversas notas digitadas pelo usuário.*/

 const NOTAS = prompt("digite sua nota")

 function calcularNotas(NOTAS){
    if(NOTAS <= 20){
        window.alert("Você está muito abaixo da média")
    }else if(NOTAS <= 59){
        window.alert("Você está abaixo da média")
    }else if(NOTAS >=60){
        window.alert("VOcê está acima da média")
    }else if(NOTAS >=100){
        window.alert("você está muito acimda da média")
    }
 }

 calcularNotas(NOTAS)