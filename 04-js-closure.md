# JS Closure

Exemplo de Closure (fechamento). Onde a função interna depende da função externa para poder retornar o resultado.

```js
function fazerCalculo(){
    var a = 5;
    var b = 4;

    function multiplicarTermos(){
        var resultadoMultip = a * b;
        return resultadoMultip;
    }

    return multiplicarTermos;
}

var resultado = fazerCalculo();
console.log("O resultado: ", resultado);
```