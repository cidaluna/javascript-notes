// Function expression
const increment1 = function(n){
    return n+1
}

// Arrow function são funções anônimas
const increment2 = (n) => {
    return n + 1
}

const increment3 = n => {
    return n + 1
}

const increment4 = n => n + 1; // forma mais enxuta

console.log(increment1(18))
console.log(increment2(18))
console.log(increment3(4))
console.log(increment4(4))


const sum = (a,b) => a+b
console.log(sum(3,8))
