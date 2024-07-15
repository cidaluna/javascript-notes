## 8. Scope

### var, let, const

```js
// var pertence ao escopo onde foi declarado
// let e const pertencem somente ao escopo do bloco {}
var nome = "Luna";

function teste0(){
  var sobrenome = "Goncalves";
  if(sobrenome === "Goncalves"){
    const valor = 10;
  }
  console.log(valor);  // Error const valor is not defined here
}
teste0();
```

### LEXICO
Dentro de uma funcao eu posso utilizar a variavel nas funcoes aninhadas
```js
function teste1(){
  var variavel = "Meu nome";
    function teste2(){
        variavel = "Seu nome";
    }
}
teste1();
```

### GLOBAL
Quando começamos a escrever o código, já estamos no escopo global. Ao alterar uma variável global no escopo global, a mesma será alterada na aplicação toda.
```js
var a = 10;
function alterar(){
  a = 128;
}
console.log(a);
alterar();
console.log(a);
```

### FUNÇÃO
Igual o escopo léxico, o que é criado dentro da função não está disponível fora dela.

### BLOCO
```js
function bloco(){
  var teste;
  if(true){
    teste = 'var teste';  
    let teste2 = 'let teste2'; 
  }
  console.log(teste);  // returns var teste
  console.log(teste2); // error teste2 is not defined
}
bloco();
```

### HOISTING
```js
function bloco(){
  var teste;
  if(true){
    teste = 'var teste';  
    var teste2 = 'var teste2'; 
  }
  console.log(teste);  // returns var teste
  console.log(teste2); // returns var teste2
}
bloco();
```

