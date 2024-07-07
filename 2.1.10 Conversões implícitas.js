/*Conversões também podem acontecer automaticamente, e elas acontecem o tempo todo. Este exemplo simples irá demonstrar isso (nós testamos um exemplo similar ao discutir o tipo String): */


const  str1  =  42  +  "1";
console.log(str1);                //  ->  421
console.log(typeof  str1);  //  ->  string
   
const  str2  =  42  -  "1";
console.log(str2);                //  ->  41
console.log(typeof  str2);  //  ->  number

/*Então o que está acontecendo? Os detalhes serão mostrados no capítulo sobre operadores, mas a resposta curta é que quando tentamos executar uma adição quando um dos argumentos é uma string, o JavaScript converterá o restante dos argumentos para uma string também. É isso que está acontecendo comstr1no exemplo. Subtração com uma string, no entanto, não faz muito sentido, então nesse caso o JavaScript converte tudo para Numbers. */