

const rosePrice = 10;
const lilyPrice = 15;
const tulyPrice = 2;

let numberOfRose = 70;
let numberOfLily = 50;
let numberOfTuly = 120;

let rosesValue = rosePrice * numberOfRose;
let lilyValue = lilyPrice * numberOfLily;
let tulyValue = tulyPrice * numberOfTuly;

let total = rosesValue + lilyValue + tulyValue;
console.log ("Rose - unit price:", rosePrice, ", quantity:",numberOfRose, ", value;", rosesValue);
console.log("Lily – unit price:", lilyPrice, ", quantity:", numberOfLily, ", value:", lilyValue);
console.log("Tulip – unit price:", tulyPrice, ", quantity:", numberOfTuly, ", value:", tulyValue);
console.log("Total: ", total);

numberOfRose = numberOfRose - 20;
numberOfLily = numberOfLily - 30;

rosesValue = rosePrice * numberOfRose;
lilyValue = lilyPrice * numberOfLily;
tulyValue = tulyPrice * numberOfTuly;

total= rosesValue + lilyValue + tulyValue;


console.log("Rose – unit price:", rosePrice, ", quantity:", numberOfRose, ", value:", rosesValue);
console.log("Lily – unit price:", lilyPrice, ", quantity:", numberOfLily, ", value:", lilyValue);
console.log("Tulip – unit price:", tulyPrice, ", quantity:", numberOfTuly, ", value:", tulyValue);
console.log("Total: ", total);




