function criarParagrafos() {
  var div1 = document.getElementById("div1");
  var body = document.body;
  var listaNaoOrdenada = document.createElement("ol");
  listaNaoOrdenada.id = "listaNaoOrdenada";
  var itens = [];

  var numParagrafos = parseInt(document.getElementById("numParagrafos").value) || 0; // Lê o número de parágrafos

  for (var i = 1; i <= numParagrafos; i++) {
      itens.push(`Parágrafo ${i}`); // Cria a string com o número do parágrafo
  }

  for (var i = 0; i < itens.length; i++) {
      var item = document.createElement("li");
      item.textContent = itens[i];
      listaNaoOrdenada.appendChild(item);
  }
  div1.appendChild(listaNaoOrdenada);
}

function copiarParagrafos() {
  var div2 = document.getElementById("div2");
  var body = document.body;
  var listaNaoOrdenada = document.createElement("ol");
  listaNaoOrdenada.id = "listaNaoOrdenada";
  var itens = [];

  var numParagrafos = parseInt(document.getElementById("numParagrafos").value) || 0; 

  for (var i = 1; i <= numParagrafos; i++) {
      itens.push(`Parágrafo ${i}`); 
  }

  for (var i = 0; i < itens.length; i++) {
      var item = document.createElement("li");
      item.textContent = itens[i];
      listaNaoOrdenada.appendChild(item);
  }
  div2.appendChild(listaNaoOrdenada);
}


let btnExecutar = document.getElementById("btnExecutar");
btnExecutar.onclick = criarParagrafos;
let btnCopiar = document.getElementById("btnCopiar");
btnCopiar.onclick = copiarParagrafos;
