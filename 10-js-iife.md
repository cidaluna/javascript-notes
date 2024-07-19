## 10. IIFE

### IIFEs Funções autoinvocadas
IIFE não tem relação nenhuma com if e else. As IIFEs ou Immediately Invoked Function Expression, são funções lidas e invocadas automaticamente em tempo de execução do código.
Exemplo:

```jsx
// Código fora da IIFE 
var nome = "Cici"; 

(function() { 
  // Código dentro da IIFE, é lido e executado
  var nome = "Lunna"; 
  console.log(nome); // Saída 1: Lunna 
})(); 

console.log(nome); // Saída 2: Cici 
```