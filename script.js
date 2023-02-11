const readline = require('readline-sync');

let nome = [];
let ajuda = "";


while(ajuda != 'exit'){

    ajuda = readline.question('Digite o nome: ');
    //exemplo: Color

    nome.push(ajuda);

    ajuda = readline.question('Para sair digite "exit". Aperte Enter para continuar');
}

console.log(nome.sort().join('\n'));
