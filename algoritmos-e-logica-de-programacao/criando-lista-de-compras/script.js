/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.
*/

// Código da aula
let items = [];

for(let item = 0; item <= 10; item++) {
  let itemName = prompt("Digite o item " + (item + 1))

  items[item] = itemName
}

alert(items)


/**
 * Meu código antes de aula
 * 
alert("Informe 10 itens para lista de compras do supermercado");
let itemList1 = prompt("Primeiro item");
let itemList2 = prompt("Segundo item");
let itemList3 = prompt("Terceiro item");
let itemList4 = prompt("Quarto item");
let itemList5 = prompt("Quinto item");
let itemList6 = prompt("Sexto item");
let itemList7 = prompt("Setimo item");
let itemList8 = prompt("Oitavo item");
let itemList9 = prompt("Nono item");
let itemList10 = prompt("Decimo item");

const supermarket =
  ` ${itemList1},
    ${itemList2},
    ${itemList3},
    ${itemList4},
    ${itemList5},
    ${itemList6},
    ${itemList7},
    ${itemList8},
    ${itemList9},
    ${itemList10}`;
  
  document.write(supermarket)
*/