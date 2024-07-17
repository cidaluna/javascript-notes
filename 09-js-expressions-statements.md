## 9. Expressions x Statements

### Expressions
Expressões (Expressions) = devolvem um valor único. Como por exemplo: chamada de método, chamada de função, chamada de if ternário, etc. As expressões não podem existir por si mesmas, elas fazem parte de uma declaração.

```js
// Exemplo Expressões (Expressions) 
1+1      // produces 2
"Luna"   // produces "Luna"
true     // produces true
[1,2,3].pop()   // produces the number 3
num > 10        // produces either true or false
isAlive ? true : false // expression returns a boolean
(5+1)*2         // expressions can contain expressions
console.log(Math.random() + 5);       // produces a unique number
console.log(expressao());             // retorna um valor único é expressão
```

### Statements 
 Declarações/Instruções (Statements) = não devolvem um valor, são ações que servem de instrução para a tarefa, como por exemplo, while, for, if, else, function, etc.
 
```js
// Exemplo Declarações (Statements)
const name = "Cida Luna";
var nickname = "Luna";
let age = 37;
let f = function funcaoTeste(){};
for(){}
if(isAlive === 1){}
let alive = isAlive ? true : false // statement, complete task instruction
while(){}
function add(firstNumber, secondNumber){ return firstNumber + secondNumber}
function expressao(){ return 1 + 1; }
function teste2(){}
```
Caso queira saber se algo é uma expressão ou uma declaração, utilize o bom e velho console.log('seu código JS aqui') se o JS executar será uma expressão. Se receber um erro, pode ser uma declaração ou um código inválido.

### Expressions x Statements in React
 Dentro do bloco de return no JSX, só é permitido o uso de expressions.

 ```jsx
 // Exemplo React
 function App(){
    return(
        <div>
            <p>{1+1}</p>                {/* success - expression */}
            <p>{isAlive ? 1 : 0}</p>    {/* success - expression */}
            <p>{if(isAlive === 1){}}</p>  {/* error - fails - statement */}
        </div>
    )
 }
 ```