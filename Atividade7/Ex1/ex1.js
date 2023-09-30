/*
Crie quatro funções (somar, subtrair, dividir e multiplicar). 
Em seguida faça uma função chamada calcular(), essa função deve receber 
3 parâmetros, valor A, valor B e a função callback que será executada.
*/

function somar(a, b) {
    return a + b
  }
  
  function subtrair(a, b) {
    return a - b
  }
  
  function dividir(a, b) {
    if (b !== 0) {
      return a / b
    } else {
      return "Erro! Divisão por zero, não dá para realizar!";
    }
  }
  
  function multiplicar(a, b) {
    return a * b
  }

  function calcular(valorA, valorB, conta) {
    return conta(valorA, valorB)
  }

  const resultadoSoma = calcular(30, 12, somar)
  console.log("Resultado da soma:", resultadoSoma)
  
  const resultadoSubtracao = calcular(30, 12, subtrair)
  console.log("Resultado da subtração:", resultadoSubtracao)
  
  const resultadoDivisao = calcular(30, 12, dividir)
  console.log("Resultado da divisão:", resultadoDivisao)
  
  const resultadoMultiplicacao = calcular(30, 12, multiplicar)
  console.log("Resultado da multiplicação:", resultadoMultiplicacao)
  