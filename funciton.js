/* O Sr. Manoel Joaquim acaba de adquirir uma panificadora e pretende implantar a metodologia da tabelinha, que já é um sucesso na sua loja de 1,99. Você foi contratado para desenvolver o programa que monta a tabela de preços de pães, de 1 até 50 pães, a partir do preço do pão informado pelo usuário, conforme o exemplo abaixo:
Preço do pão: R$ 0.18
Panificadora Pão de Ontem - Tabela de preços
1 - R$ 0.18
2 - R$ 0.36
...
50 - R$ 9.00 */

const valorProduto = 0.18;
let valorTotal = 0;
let proximo = 's';

do {
        let quantidadePao = prompt("Por favor, para que todos consigam se alimentar, vendemos apenas 50 pães por CPF.\n Qual a quantidade de pães que deseja comprar?");
            valorTotal = valorProduto*quantidadePao; 
            alert("Quantidade total a ser paga é: "+valorTotal);
        proximo = prompt("|--------PRÓXIMO CLIENTE--------| \n |Digite (S) para o próximo cliente| \n |Ou digite (N) para sair.               |")
    } while (proximo =='s');
    alert("Obrigado por usar nossos serviços");
