'use strict'

let myReversedName = "drahciRelttiL";
let myActualName = reverseString(myReversedName);
console.log(myActualName);

function reverseString(str){
    return str.split('').reverse().join('');
}