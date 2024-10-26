function criarParagrafos() {
  var div1 = document.getElementById("div1");
  var body = document.body;
  var listaNaoOrdenada = document.createElement("ol");
  listaNaoOrdenada.id = "listaNaoOrdenada";
  var itens = [];

  var numParagrafos = parseInt(document.getElementById("numParagrafos").value) || 0; 

  for (var i = 1; i <= numParagrafos; i++) {
    var item = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `paragrafo-${i}`;
    var texto = document.createElement("label");
    texto.htmlFor = checkbox.id; 
    texto.textContent = `Parágrafo ${i}`;
    item.appendChild(checkbox);
    item.appendChild(texto);
    listaNaoOrdenada.appendChild(item);
  }
    div1.appendChild(listaNaoOrdenada);
}

function copiarParagrafos() {
  var div2 = document.getElementById("div2");
  var body = document.body;
  var checkboxes = div1.querySelectorAll('input[type="checkbox"]');
  var listaNaoOrdenada = document.createElement("ul");
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            var item = document.createElement("li");
            var texto = document.createElement("label");
            texto.textContent = `Parágrafo ${index + 1}`; 
            item.appendChild(texto);
            listaNaoOrdenada.appendChild(item);
        }
    });
    div2.appendChild(listaNaoOrdenada);
}


let btnExecutar = document.getElementById("btnExecutar");
btnExecutar.onclick = criarParagrafos;
let btnCopiar = document.getElementById("btnCopiar");
btnCopiar.onclick = copiarParagrafos;
