var curso = new Object();
var curso = {
  título: "Javascript Formação Básica",
  instrutora: "Amanda Cavallaro",
  nível: "1",
  dataPublicacao: false,
  numeroVisualizacoes: 0,
};

console.log(curso);

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