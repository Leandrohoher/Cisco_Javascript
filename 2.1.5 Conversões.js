/*É uma situação bem comum ter um valor de um tipo, mas precisar de um valor de outro tipo. O exemplo mais simples é quando temos um número, mas precisamos adicioná-lo a algum texto. Conversões em JavaScript acontecem automaticamente em situações específicas, mas também podem ser usadas explicitamente por meio de funções comoCorda()ouNúmero(). Anteriormente, vimos como essas funções poderiam ser usadas para criar valores padrões desses tipos, mas isso não é tudo o que elas podem fazer. Essas funções também aceitam argumentos entre parênteses e (se possível) os converterão para um tipo dado. */

const  num  =  42;
   
const  strFromNum1  =  String(num);
const  strFromNum2  =  String(8);
const  strFromBool  =  String(true);
const  numFromStr  =  Number("312");
const  boolFromNumber  =  Boolean(0);

/*A maioria dessas conversões é direta, mas algumas podem ser um pouco confusas, então vamos discutir cada caso de conversão primitiva. Teste todos os exemplos mostrados para conversão de tipo. Tente experimentar com seus próprios valores. */
