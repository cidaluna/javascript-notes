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
