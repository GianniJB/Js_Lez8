//1.seleziona bottone in variabile btnAdd
const btnAdd = document.querySelector("#insert_div button");
console.log(btnAdd); //OK c'è

//+Crea array per lista task
const taskList = [];

//1.Crea funzione prima di eventListner (la deve caricare prima)
const btnAddFunc = function (event) {
  console.log("bottone cliccato"); //Il bottone è collegato, risponde
  //Crea elemento lista
  const newLi = document.createElement("li");
  //seleziono input, metto in variabile input
  const input = document.getElementById("text_input");
  //testo che verrà inserito va in variabile text
  const text = input.value;
  //prendi testo inseriscilo nell'elemento lista
  newLi.innerText = text;
  //seleziona elemento ul
  const ul = document.getElementById("lista");
  //aggiungi elemento a ul
  ul.appendChild(newLi);
};

//bottone è btnAdd
//2.crea evento. QUNADO?
btnAdd.addEventListener("click", btnAddFunc); //click collega direttamente il bottone senza attributo "onclick", btnAddFunc collega alla funzione
