
function logParams(a,b,c){
    console.log(a,b,c)
}

logParams(1,5,10)
logParams(1,5,10,8,9) // executa, imprime 1,5,10 e não gera problema
logParams(1,5)        // executa e no último parâmentro retorna undefined
logParams(1)
logParams()           // executa e retorna 3 undefined

function defaultParams(a,b=0,c=0){
    console.log(a,b,c)
}

defaultParams(7,9)

// função recebe um array e imprime
function logNums(nums){
    for(let n of nums){
        console.log(n)
    }
}

logNums([1,2,3,4,5,6])

// spread/rest
// a função recebe uma quantidade variável de parâmetros 
function logNums2(...nums){
    for(let n of nums){
        console.log(n)
    }
}
logNums2(1,2,3,4)

// spread/rest
// a função recebe uma quantidade variável de parâmetros 
function logNums3(...nums){
    console.log(Array.isArray(nums))   // verifica se recebeu um Array
    for(let n of nums){
        console.log(n)
    }
}
logNums3(1,2,3)

function sumAll(...nums){
    let total = 0
    for(let n of nums){
        total += n
    }
    return total
}

console.log(sumAll(1,5,6,12,1))
