/* Para que as conversões para um BigInt sejam bem-sucedidas, precisamos de um Number ou String representando um número como um valor a ser convertido. Os valores para conversão podem ser fornecidos no formato decimal padrão, bem como no formato hexadecimal, octal ou binário. Isso se aplica tanto à situação em que fornecemos os literais Number e String como argumentos (ou variáveis ​​contendo dados desses tipos). Também podemos usar a notação exponencial, mas apenas para argumentos Number. Ao contrário de outras conversões, a conversão para um BigInt lançará um erro e interromperá o programa quando não for possível converter um determinado valor.

Nota: Ao testar o exemplo a seguir, preste atenção ao fato de que o primeiro erro impede a execução posterior do código. Então, execute o exemplo várias vezes em sucessão, removendo as chamadas erradas uma por uma.*/

console.log(BigInt(11));  //  ->  11n
console.log(BigInt(0x11));  //  ->  17n
console.log(BigInt(11e2));  //  ->  1100n
   
console.log(BigInt(true));  //  ->  1n
   
console.log(BigInt("11"));  //  ->  11n
console.log(BigInt("0x11"));  //  ->  17n
   
console.log(BigInt(null));  //  ->  Uncaught  TypeError:  Cannot  convert  null  to  a  BigInt
   
console.log(BigInt(undefined));  //  ->  Uncaught  TypeError:  Cannot  convert  undefined  to  a  BigInt
   
console.log(BigInt(NaN));  //  ->  Uncaught  RangeError:  The  number  NaN  cannot  be  converted  to  a  BigInt  because  it  is  not  an  integer
