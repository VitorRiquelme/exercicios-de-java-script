function calculadora(){
    const OPERACAO = Number(prompt(`Escolha uma operação:\n 1 - soma (+) \n 2 - subtração(-) \n 3 - multiplicação(*) \n 4 - divisão real (/) \n 5 - divisão inteira (%) \n 6 - potenciação(**) `));

    let n1 = Number(prompt('Informe seu primeiro valor seu filho da puta idiota'));
    let n2 = Number(prompt('Informe o segundo falro seu filho de uma puta burro'));
    let resultado;

    function soma(){
        resultado = n1 + n2;
        alert(`o valor de ${n1} + ${n2} é igual a ${resultado}`);
    }

    if(OPERACAO == 1){
        soma();
    }else if(OPERACAO == 2){
        subtracao();
    }else if(OPERACAO == 3){
        multiplicacao();
    }else if(OPERACAO == 4){
        divisaoReal();
    }else if(OPERACAO == 5){
        divisaoInteira();
    }else if (OPERACAO == 6){
        potenciacao();
    }
 
}


calculadora();