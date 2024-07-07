/* A conversão para um número não é tão óbvia quanto a conversão para uma string. Ela funciona como esperado para strings que representam números reais, como"14","-72.134", ou strings que representam números em notação científica, como"2e3", ou valores numéricos especiais como"NaN"ou"Infinidade".

No entanto, a string também pode conter números em formato hexadecimal, octal e binário. Eles devem ser precedidos por 0x, 0o ou 0b, respectivamente. Para qualquer string que não possa ser convertida em um valor especial,NaN(não é um número) é retornado. UmGrande Inttambém pode ser convertido em umNúmero, mas precisamos lembrar que um BigInt pode armazenar valores muito maiores que um Number, então para valores grandes, parte deles pode ser truncada ou acabar sendo imprecisa. O Booleanverdadeiroé convertido para1, efalsopara0– isso é comum para muitas linguagens de programação. Uma tentativa de converter um valor indefinido resultará em NaN, enquanto nulo será convertido para0.*/

console.log(Number(42));  //  ->  42
   
console.log(Number("11"));  //  ->  11
console.log(Number("0x11"));  //  ->  17
console.log(Number("0o11"));  //  ->  9
console.log(Number("0b11"));  //  ->  3
console.log(Number("12e3"));  //    ->  12000
console.log(Number("Infinity"));//  ->  Infinity
console.log(Number("text"));  //  ->  NaN
   
console.log(Number(14n));  //  ->  14
console.log(Number(123456789123456789123n));  //  -  >    123456789123
456800000
   
console.log(Number(true));  //  ->  1
console.log(Number(false));  //  ->  0
   
console.log(Number(undefined));  //    ->  NaN
   
console.log(Number(null));//  ->  0
