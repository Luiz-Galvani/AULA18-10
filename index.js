function criarParagrafos(){
    var body= document.body;
    var listaNaoOrdenada = document.createElement("ol");
    listaNaoOrdenada.id = "listaNaoOrdenada";
    var itens = ["Parágrafo"];
  
    for (var i = 0; i < 5; i++) {
      var item = document.createElement("li");
      item.textContent = itens;
      listaNaoOrdenada.appendChild(item);
    }
    body.appendChild(listaNaoOrdenada);
    
}
function copiarParagrafos(){
    document.getElementById("listaNaoOrdenada");
    for (var i = 0; i < 5; i++) {
        var item = document.createElement("li");
        item.textContent = itens;
        listaNaoOrdenada.appendChild(item);
      }
}
let btnExecutar = document.getElementById("btnExecutar");
btnExecutar.onclick = criarParagrafos;
let btnCopiar = document.getElementById("btnCopiar");
btnCopiar.onclick = copiarParagrafos;

