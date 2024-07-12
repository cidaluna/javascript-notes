# Javascript Notes

Este repositório apresenta anotações sobre a linguagem Javascript (JS) na Web.
Será abordado conceitos básicos com a sintaxe e exemplos práticos para estudo.

<p align="center">
  <img src="images/javascript-logo-js.png" width="200">
</p>

## 📚 <a id="table-of-contents">Conteúdo</a>

1. **[Intro](#1-intro)**
2. **[Variables](#2-variables)**
3. **[Types](#3-types)**
4. **[Closure](#4-closure)**
5. **[BOM-DOM](#5-BOM-DOM)**
6. **[Pilha-Stack-LIFO](#6-Pilha-Stack-LIFO)**


## 1. Intro

-  [Intro](https://github.com/cidaluna/javascript-notes/blob/main/01-js-intro.md)

- Links:
- [Treinar Javascript no JSBin] (http://jsbin.com/?js,console)
- [MDN Learn Javascript] (https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript)
- [Book Online] (https://exploringjs.com/js/book/index.html)


```html
<body>
  ...
  <script src="./myscript.js"></script>
</body>
```

```javascript
<script>console.log('Hello!!');</script>
```

### Books & References

- [MDN Docs Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)


**[⬆ Back to Top](#table-of-contents)**

---

## 2. Variables

-  [Variables](https://github.com/cidaluna/javascript-notes/blob/main/02-js-variables.md)

- **var** 
- **let**
- **const** (_value can NOT be updated_)

Keyword             |  var   | let   | const 
--------------------|--------|-------|------
Global Scope        |  ✅   |  ❌   |  ❌
Function Scope      |  ✅   |  ✅   |  ✅
Block Scope         |  ❌   |  ✅   |  ✅
Can Be Reassigned?  |  ✅   |  ✅   |  ❌
Can Be Redeclared?  |  ✅   |  ❌   |  ❌
Can Be Hoisted?     |  ✅   |  ❌   |  ❌


| Legenda     |
|-------------|
| ✅ - Yes    |
| ❌ - No     |


```js
var name = "Cida";
let age = 37;
const cool = true;
```

**[⬆ Back to Top](#table-of-contents)**

---

## 3. Types

-  [Types](https://github.com/cidaluna/javascript-notes/blob/main/03-js-types.md)

![Javascript's type hierarchy](./images/javascript-types-hierarchy.PNG)

- Primitive values = undefined, null, boolean, number, bigint, string, symbol.
- All other values = objects.
<hr/>

- ### String:

Can be declared with quotes, double-quotes or back ticks.

```js
const name = "Cida";
const middle = "Luna";
const last = `Gonçalves`;
```

- ### Number:

```js
let a = 10 + 10;  // addition
let b = 20 - 10;  // subtraction
let c = 10 * 10;  // multiplication
let d = 100 / 10; // division
let e = 1000 % 3; // modulo
```

- ### Object:

```js
var curso = new Object();
var curso = {
  título: "Javascript Formação Básica",
  instrutora: "Amanda Cavallaro",
  nível: "1",
  dataPublicacao: false,
  numeroVisualizacoes: 0,
};

console.log(curso);
```

Criando objeto a partir do construtor:
```js
function Curso2(titulo, instrutora, nivel, dataPublicacao, numeroVisualizacoes){
    this.titulo = titulo,
    this.instrutora = instrutora,
    this.nivel = nivel,
    this.dataPublicacao = dataPublicacao,
    this.numeroVisualizacoes = numeroVisualizacoes
  }
  
  var cursos = [
      new Curso2("HTML, CSS, JS, Angular, React", "Luna C", 1, false, 0),
      new Curso2("HTML, CSS, JS, Angular, React", "Luna C", 1, true, 454242352)
  ]
  console.log(cursos);
```

**[⬆ Back to Top](#table-of-contents)**

---

## 4. Closure

-  [Closure](https://github.com/cidaluna/javascript-notes/blob/main/04-js-closure.md)

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

### Books & References

- [You Don't Know JS Yet, 2nd Edition: Scope & Closures — Kyle Simpson](https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/scope-closures)

**[⬆ Back to Top](#table-of-contents)**

---

## 5. BOM DOM

-  [BOM-DOM](https://github.com/cidaluna/javascript-notes/blob/main/05-js-BOM-DOM.md)

## Browser Object Model - BOM
Modelo de objeto de Navegador - Janela

- Propriedades do BOM:
```js
window.innerWidth;  // verifica a largura da janela do navegador
window.navigator;   // verifica qual é o navegador e outras propriedades

```

- Métodos do BOM:
```js
window.alert("Olá");
```

## Document Object Model - DOM
Modelo de objeto do Documento - Documento dentro da janela
As tags do HTML são considerados como Nós do DOM.
![Javascript árvore de nós - DOM](./images/javascript-arvore-nos-DOM.PNG)


- Propriedades do DOM:
```js
document.body;   // O elemento body
document.title;  // O título do documento
document.URL;    // A URL do documento
```

- Métodos do DOM:
```js
document.getElementById("id-btn");
document.getElementById("demo").innerHTML = 5 + 6; // imprime 11 no elemento do HTML que tiver o id demo
document.getElementsByClassName("nomeDaClasse");
document.getElementsByTagName("nomeDaTag");
document.querySelector(".main-nav a");
document.querySelectorAll("a");  // recupera todas as ancoras <a> no documento
```

- Métodos com propriedade do DOM:
```js
document.querySelector(".subtitle").innerHTML = "Um hotel em Marte?"; // altera a primeira instância do texto no documento
document.querySelector(".masthead").classList;  // retorna um array com os elementos encontrados por indice
document.querySelector(".masthead").classList.add("nova-classe"); // adiciona uma classe ao elemento
document.querySelector(".masthead").classList.remove("nova-classe"); // remove uma classe do elemento
document.querySelector(".nova-classe").classList.toggle("masthead"); // retorna true(adiciona) or false(remove)
const CTA = document.getElementById("ctaBtn");
if (CTA.hasAttribute("target")) {
    console.log(CTA.getAttribute("target"));
}else{
    CTA.setAttribute("target","_blank"); // adiciona o atribute que abre uma nova aba no navegador
}
console.log(CTA.attributes);

```

- Métodos de criação de elemento no DOM:
```js
.createElement();    // Cria um elemento
.createTextNode();   // Cria um nó de texto
.apppendChild();     // Coloca um nó filho dentro de outro
```

**[⬆ Back to Top](#table-of-contents)**

---

## 6. Pilha Stack LIFO
### LIFO (Last In First Out)

-  [Pilha Stack LIFO](https://github.com/cidaluna/javascript-notes/blob/main/06-js-pilha-LIFO.md)

```js
// LIFO (Last In First Out) = O último que entrou é o primeiro a sair

function funcao1(){
    funcao2(); // primeiro executa a chamada da funcao2 depois apresenta a linha a seguir do console
    console.log('Executou a funcao 1');
}

function funcao2(){
    funcao3(); // chama a funcao3, executa ela, depois apresenta o console abaixo
    console.log('Executou a funcao 2');
}

function funcao3(){
    console.log('Executou a funcao 3');
}

funcao1();
```

![Pilha LIFO](./images/Cida-Luna-Praticando-Javascript-Pilha-LIFO-Frontend.PNG)

**[⬆ Back to Top](#table-of-contents)**

---

