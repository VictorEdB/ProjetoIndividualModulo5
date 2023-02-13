const readline = require('readline-sync');
const chalk = require('chalk')

let nome = [];
let assis = "";


while(assis != 'sair'){

    assis = readline.question('Digite o nome: ');

    nome.push(assis);

    assis = readline.question('Para sair digite "sair". Aperte Enter para continuar ');
    
    if(assis == 'sair'){
    console.log(chalk.green(nome.sort().join('\n')));
}

}
