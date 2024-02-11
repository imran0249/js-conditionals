/**
 * TERNARY --> THREE PARTS
 * 
 *  ?    :
 * 
 * condition ? do something when true : do something when false
 * 
 */


 const age = 12;

//  Normal if-else
// if (age >= 18){
//     console.log('you can vote')
// }
// else {
//     console.log('ghumay thako')
// }

// ----উপরের ওটার shorthand----

// Simple ternary
// age >= 18 ? console.log('you can  vote') : console.log('ghumay thako')


let price = 500;
const isLeader = true;

if(isLeader === true){
    price = 0;
}
else{
    price = price + 100;
}
console.log(price)

//এটার shorthand-----


price = isLeader === true ? 0 : price + 100;