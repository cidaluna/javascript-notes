// Anonymous function
(function (a,b,c){
    return a+b+c
})

// Function expression
const sum = function(a,b){
    return a+b
}

const result = sum(10,5)
console.log(result)

const anotherSum = sum
console.log(anotherSum(5,9))

let x = 3
console.log(x)

x=sum
console.log(x(10,10))

// Montando tabuada dinâmica
//var numero = parseInt(prompt("Digite o que deseja multiplicar: "));
//var multiplicador = parseInt(prompt("Digite até quanto deseja multiplicar: "));
// Exemplo
// 5 x 0 = 0
function calcularTabuada(numero, multiplicador){
    for(i = 0; i <= multiplicador; i++){
        console.log(numero + " x " + i + " = " + (numero*i));
    }
}

calcularTabuada(5,11);
