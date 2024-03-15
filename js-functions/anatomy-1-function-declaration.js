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

console.log(returnHiTo('John'))