/*let primeiroNome = "vitor"
let sobreNome = "riquelme"

let nome = `Meu nome é ${primeiroNome} e meu sobrenome é ${sobreNome}`

console.log(nome)*/

let idade = prompt("Qual a sua idade ? ")

if(idade <=17){
    alert("voce  não pode beber")
}else if(idade>=18){
    alert("voce pode beber ")
}

let pessoa = {
    nome : "Vitor riquelme",
    idade : 20,
    peso : 55+"kg",
    altura : 1.84
}
Object.keys

console.log(pessoa.altura)*

function numerosIguais(a, b){
    if(a === b){
        console.log("os numeros são iguais")
    }else{
        console.log("os numeros são diferentes")
    }
}

function somDeNumeros(s,d){
    if(s + d >= 20){
        console.log(`a some de ${s} e ${d} são maiores que 10`)
    }else if(s + d <=19){
        console.log(`a soma de ${s} e ${d} são menores que 20`)
    }
}

numerosIguais(12,12)
somDeNumeros(12, 12)

function numeros (num1,num2){
    const NUMEROS_IGUAIS = num1 === num2
    const SOMA_DOS_NUMEROS = num1 + num2

    if(NUMEROS_IGUAIS && SOMA_DOS_NUMEROS){
        return `os numeros ${num1} e ${num2} são iguais e sua soma é `
    }
}