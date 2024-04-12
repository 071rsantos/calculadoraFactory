function criaCalculadora(){ // criando factory de calculadoras
    return{ // tudo que tem que ser retornado na factory
        display: document.querySelector('.display'), //pegando classe display do html (atributo)

        inicia(){// function para inicializar a calculadora
            this.clickBtn(); // invando metodo click
            this.enterKeyUp();// invando metodo enter
        },

        enterKeyUp(){ // function criando metodo enter
            this.display.addEventListener('keyup', (e) => { // adicionando evento na acao de apertar e soltar uma tecla e inicializando uma arrow function avulsa
                if(e.keyCode === 13){ // se o codigo da tecla for igual a 13 faça:
                    this.realizaConta(); // invocando metodo de realizar conta
                }
            })
        },

        clickBtn(){ // function criando metodo click
            document.addEventListener('click', (e) => {// adicionando evento na acao de clicar em algo na tela e inicializando uma arrow function avulsa
                const el = e.target; // declarando variavel e atribuindo a ela o botao que foi apertado

                if(el.classList.contains('btn-num')){ // se o botao que foi apertado contem em sua classe 'btn-num', invoque o metodo 'btnParaDisplay'
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){ // se o botao que foi apertado contem em sua classe 'btn-clear', invoque o metodo 'clearDisplay
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){ // se o botao que foi apertado contem em sua classe 'btn-del', invoque o metodo 'delOne'
                    this.delOne();
                }
                if(el.classList.contains('btn-eq')){ // se o botao que foi apertado contem em sua classe 'btn-eq', invoque o metodo 'realizaConta'
                    this.realizaConta();
                }
            });
        },
        btnParaDisplay(valor){ //Criando metodo bntParaDisplay, ultilizando arrow function e valor como parametro
            this.display.value += valor; // concatenando ao input o valor que foi clicado
        },
        clearDisplay(){ //Criando metodo clearDisplay
            this.display.value = ''; // limpando input
        },
        delOne(){ //Criando metodo delOne
            this.display.value = this.display.value.slice(0, -1); // ultilizando o metodo slice do javaScript para apagar
        },
        realizaConta(){ //Criando metodo realizaConta
            let conta = this.display.value; // declarando variavel conta e atribundo a ela tudo que foi digitado no input

            try{ // funcao try
                conta = eval(conta); // atribuindo a conta uma funcao eval, na qual realiza a conta que foi digitada

                if(!conta) { // se conta for uma valor invalido faça:
                    alert('Conta invalida')  // alerta de conta invalida
                    return; // return finalizando a funcao
                }

                this.display.value = String(conta); // transformando o conteudo do input em string
            } catch(e){ // pegando caso o erro caso o conteudo do input nao seja numero
                alert('Conta invalida'); // alerta de conta invalida
                return; // return finalizando a funcao
            }
        }
    };
};

const calculadora = criaCalculadora(); // criando uma calculadora
calculadora.inicia(); // iniciando a calculadora