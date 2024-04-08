# BOM & DOM
## Browser Object Model - BOM
Modelo de objeto de Navegador - Janela

Para verificar a largura da janela aberta no navegador:
```js
window.innerWidth

```

## Document Object Model - DOM
Modelo de objeto do Documento - Documento dentro da janela
As tags do HTML são considerados como Nós do DOM.
![Javascript árvore de nós - DOM](./images/javascript-arvore-nos-DOM.PNG)


```js
document.getElementById("id-btn");
document.getElementsByClassName("nomeDaClasse");
document.getElementsByTagName("nomeDaTag");
document.querySelector(".main-nav a");
document.querySelectorAll(".post-content p");

```
- Propriedades do DOM:
- document.body;   // O elemento body
- document.title;  // O título do documento
- document.URL;    // A URL do documento
