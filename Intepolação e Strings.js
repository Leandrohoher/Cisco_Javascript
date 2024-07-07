/* Um mecanismo muito conveniente que foi introduzido no JavaScript em 2015 é a interpolação de strings . Ela permite que você trate uma string de caracteres como um modelo, no qual você pode colocar valores em lugares selecionados, como aqueles retirados de variáveis. Tal literal é criado usando acentos graves (ou crases) em vez de aspas. Os lugares onde os valores são inseridos são marcados com chaves precedidas por um$sinal.*/

let country = "Malawy";
let continent = "Africa";

let sentence = `${country} is located in ${continent}.`;
console.log(sentence);