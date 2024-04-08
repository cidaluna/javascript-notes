/* Exemplo: Criando um objeto */
var curso = new Object();
var curso = {
  título: "Javascript Formação Básica",
  instrutora: "Amanda Cavallaro",
  nível: "1",
  dataPublicacao: false,
  numeroVisualizacoes: 0,
};

console.log(curso);

/* Exemplo: Criando objeto a partir de um constructor */
function Curso2(titulo, instrutora, nivel, dataPublicacao, numeroVisualizacoes){
    this.titulo = titulo,
    this.instrutora = instrutora,
    this.nivel = nivel,
    this.dataPublicacao = dataPublicacao,
    this.numeroVisualizacoes = numeroVisualizacoes,
    this.atualizaNumViews = function(){
        return ++curso.numeroVisualizacoes;
    };
  }
  
  var cursos = [
      new Curso2("HTML, CSS, JS", "Amanda C", 1, false, 0),
      new Curso2("HTML, CSS, JS", "Amanda C", 1, true, 454242352)
  ]
  console.log(cursos);
  console.log(cursos[0].titulo);
  console.log(cursos[0].atualizaNumViews);

/* Exemplo de Closure JS - Mesmo que a função externa tenha sido fechada,  
a interna consegue fazer o calculo e retornar o resultado */
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
console.log("O resultado: ", resultado()); //resultado é chamado como se fosse uma função();