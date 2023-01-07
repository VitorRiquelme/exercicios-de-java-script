/*Funções em javascript
 array 
let nomes = ["vitor","lucas","bruno","julia"];

nomes.push("marcelo")
nomes.pop()

console.log(nomes)*/

function calculadora(){
    const OPERACAO = prompt(`Escolha uma operação :\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/) \n 5 - divisão inteira (%) \n 6 - pontenciação(**)`);

    let n1 = prompt('Insira o valor aqui');
    let n2 = prompt('Insira o outro valor ');
    let resultado;

    function soma(){
        resultado = n1 + n2
        alert(`A soma entre ${n1} e ${n2} é igual a ${resultado}`)
    }

}

if(OPERACAO == 1){
    soma(); 
}else if(OPERACAO == 2){
    subtraçao();
}else if(OPERACAO == 3){
    multiplicacao();
}else if(OPERACAO == 4){
    divisaoReal();
}else if(OPERACAO == 5){
    divisaoInteira();
}else if(OPERACAO == 6){
    potenciacao();
}

