# Javascript's type hierarchy

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
    this.titulo = "Javascript Formação Básica",
    this.instrutora = "Amanda Cavallaro",
    this.nivel = "1",
    this.dataPublicacao = false,
    this.numeroVisualizacoes = 0
  };
  
  var cursos = [
      new Curso2("HTML, CSS, JS", "Amanda C", 1, false, 0),
      new Curso2("HTML, CSS, JS", "Amanda C", 1, true, 454252)
  ]
  console.log(cursos);
```
