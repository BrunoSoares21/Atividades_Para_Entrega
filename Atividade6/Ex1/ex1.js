/*
1) Considerando a seguinte lista de valores: [10,12,15,35,40] crie funções para devolver os dados conforme solicitado:
a) Uma função que devolve os valores que são maiores que a média
b) Uma função que devolva o menor valor da lista
c) Uma função que devolva o valor da soma dos itens da lista
d) Uma função que devolva todos os valores que são menores que 20
*/

const lista = [10, 12, 15, 35, 40]

function valoresMaioresMedia(lista) {
    const media = lista.reduce((total, valor) => total + valor, 0) / lista.length
    return lista.filter((valor) => valor > media)
  }

function menorValor(lista) {
    return lista.reduce((min, valor) => (valor < min ? valor : min), lista[0])
}

function somaItens(lista) {
    return lista.reduce((total, valor) => total + valor, 0)
}
  
function valoresMenoresQueVinte(lista) {
    return lista.filter((valor) => valor < 20)
}

console.log("\nValores maiores que a média:", valoresMaioresMedia(lista))
console.log("\nMenor valor da lista:", menorValor(lista))
console.log("\nSoma dos itens da lista:", somaItens(lista))
console.log("\nValores menores que 20:", valoresMenoresQueVinte(lista))
  