const a = Math.floor(Math.random() * 1000)
const b = Math.floor(Math.random() * 1000)
function add(a, b){
    return (a+b)

}
function subtract(a, b){
return (a-b)
}
function multiply(a, b){
    return (a*b)

}
function divide(a, b){
    return (a/b)

}
function increment(a){
    return (a+1)
}
function decrement(a){
    return (a-1)
}
function makeInt(n) {
    return parseInt(n, 10);
}
console.log(makeInt('0x2328')); 
console.log(makeInt('sldkjflksjf'));

function preserveDecimal(n){
    return parseFloat(n)
}
console.log('2.222')
console.log('sldkjflksjf')