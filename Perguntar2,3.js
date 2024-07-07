
/** Questão 3: Realize uma cadeia de conversões: crie umaboleanoa partir de umGrande Intcriado a partir de umNúmeroque foi criado a partir de umCorda. Comece com o valor"1234". É possível? */

let b = Boolean(BigInt(Number("1234")));
console.log(`{b} [${typeof b}]`);

// or

let s = "1234";
let n = Number(s);
let bi = BigInt(n);
let boo = Boolean(bi);
console.log(`${boo} [${typeof boo}]`);

