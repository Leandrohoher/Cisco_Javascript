/*Os métodos e propriedades de string comumente usados ​​(ou seja, valores nomeados relacionados ao objeto) são:

comprimento: propriedade, retorna o número de caracteres em uma string;



charAt(índice): método, retorna o caractere na posição "índice" na string (os índices começam em 0);



fatia(beginIndex, [opcional] endIndex): método, retorna uma nova string que é criada a partir dos caracteres entreinícioÍndice(incluído) efimÍndice(excluído); sefimÍndiceé omitido, então a nova string é deinícioÍndiceaté o final da sequência;



split(separador, [opcional] limite): método, divide a string em substrings sempre que um separador é encontrado nessa string e retorna uma matriz dessas substrings (falaremos algumas palavras sobre matrizes em um momento), enquanto um opcionallimitelimita o número de substrings adicionadas à lista.

 */

let str = "java script language";

console.log(str.length);
console.log('test'.length);

console.log(str.charAt(0));
console.log('abc'.charAt(1));

console.log(str.slice(0, 4));
console.log('test'.slice(1, 3));

console.log(str.split(''));
console.log('192.168.1.1'.split('.'));


