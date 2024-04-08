// CTRL + Alt + n para rodar o code runner
// Function Declaration
// Função 1
function sayHello(){
    console.log('Hello!')
}

// Invocando a função
sayHello()

// Função 2 com parâmetro
function sayHelloTo(name){
    console.log('Hello '+ name)
}

// Invocando a função com parâmetros
sayHelloTo('Cida')

// Função 3 com parâmetro
function sayHelloTo2(name){
    console.log(`Hello: ${name}`)
}

sayHelloTo2('Luna')

// Função 4 com retorno
function returnHi(){
    return 'Hi!'
}

let greeting = returnHi()
console.log(greeting)
console.log(returnHi())

function returnHiTo(name){
    return `Hi ${name}!!!`
}

console.log(returnHiTo('John'));

// --- Tres tipos de funcoes
// Funcoes nomeadas
function multiplica(a,b){
    var result = a * b;
    console.log((a +" multiplicado por "+ b +" = ", result));
}
var a = 10;
var b = 3;
multiplica(a,b);

function findBiggestFraction(q,r){
    let res;
    q > r ? res = ["first", q] : res = ["second", r]; 
    return res;
}
q = 3/4;
r = 5/7;
let rr = findBiggestFraction(q,r);
console.log("A maior fração é: "+rr[0]+" com o valor:" +rr[1]);

// Funcoes Anonimas, invocada ao chamar a variavel que recebe a funcao
var divideTermos = function (){
    let resultado = 3/4;
    console.log(" 3 dividido por 4 é: ", resultado)
}
divideTermos();

// Funcao Anonima com argumento
var tehBiggest = function(a,b){
    let resu;
    a>b ? resu = ["a: ", a] : resu = ["b: ", b];
    return resu;
}
console.log(tehBiggest(7/9, 13/25));

// IIFE = Expressoes de Funcoes Imediatamente Invocadas
(function(){
    let res = 12/0.75;
    console.log(" 12 dividido por 0.75 é: ", res);
}())