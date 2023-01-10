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

 Crie um programa que entre com os dados de altura e sexo de 5 pessoas. Imprima na tela quantas pessoas são do sexo masculino e quantas pessoas são do sexo feminino. Mostre também qual é a maior altura e se essa altura é de um homem ou uma mulher.*/

 const PESSOA_1 ={
    nome:"vitor",
    sexo:"masculino",
    altura:1.85
 };
 const PESSOA_2={
    nome:"lucas",
    sexo:"masculino",
    altura:1.78
};
 const PESSOA_3={
    nome:"jessica",
    sexo:"feminino",
    altura:1.54
 };
 const PESSOA_4={
    nome:"lais",
    sexo:"feminino",
    altura:1.50
 };
 const PESSOA_5={
    nome:"junior",
    sexo:"masculino",
    altura:1.95
 }
 
 const PESSOAS = [PESSOA_1,PESSOA_2,PESSOA_3,PESSOA_4,PESSOA_5]

 function retornarPessoas(){
 for (let i = 0; i < PESSOAS.length; i++) {
      if(PESSOAS.sexo === "masculino"){
        return 
      }
 }}

 console.log(PESSOAS)