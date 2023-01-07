function calculadora(){
    const OPERACAO = Number(prompt(`Escolha uma operação:\n 1 - soma (+) \n 2 - subtração(-) \n 3 - multiplicação(*) \n 4 - divisão real (/) \n 5 - divisão inteira (%) \n 6 - potenciação(**) `));

    if(!OPERACAO || OPERACAO >= 7){
        alert('Ops voce colocou um numero invalido idiota aderbal')
        calculadora();
    }else{
        let n1 = Number(prompt('Informe seu primeiro valor seu filho da puta idiota'));
        let n2 = Number(prompt('Informe o segundo falro seu filho de uma puta burro'));
        let resultado;
    
        function soma(){
            resultado = n1 + n2;
            alert(`o valor de ${n1} + ${n2} é igual a ${resultado}`);
            novaOperacao();
        }
    
        function subtracao(){
            resultado = n1 - n2;
            alert(`o valor de ${n1} - ${n2} é igual a ${resultado}`);
            novaOperacao();
        }
    
        function multiplicacao(){
            resultado = n1 * n2;
            alert(`o valor de ${n1} * ${n2} é igual a ${resultado}`);
            novaOperacao();
        }
    
        function divisaoReal(){
            resultado = n1 / n2;
            alert(`o valor de ${n1} \ ${n2} é igual a ${resultado}`);
            novaOperacao();
        }
    
        function divisaoInteira(){
            resultado = n1 % n2;
            alert(`o valor de ${n1} % ${n2} é igual a ${resultado}`);
            novaOperacao();
        }
    
        function potenciacao(){
            resultado = n1 ** n2;
            alert(`o valor de ${n1} ** ${n2} é igual a ${resultado}`);
            novaOperacao();
        }
    
        function novaOperacao(){
            let opcao = prompt('Deseja fazer outra operação \n 1 - sim queroooo pfv daddy \n 2 - não');
    
            if(opcao == 1){
                calculadora();
            }else if(opcao == 2){
                alert('Entao vai se fuder')
            }else{
                alert('Digita 1 ou 2 tu é burro ???')
                novaOperacao();
            }
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
    }

    calculadora();

   