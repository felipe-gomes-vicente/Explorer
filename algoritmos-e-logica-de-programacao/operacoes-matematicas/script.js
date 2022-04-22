/**
  Capturar 2 números e fazer as operações
  matemáticas de soma, subtração, multiplicação,
  divisão e resto da divisão. 

  E para cada operação, mostrar um alerta com o resultado.
 */

// Minha solução antes da aula
  alert("Iremos fazer operações matemáticas...")
  let numberOne = Number(prompt("Digite o primeiro número "))
  let numberTwo = Number(prompt("Digite o outro número "))
  let resultSum = numberOne + numberTwo
  let resultMult = numberOne * numberTwo
  let resultSub = numberOne - numberTwo
  let resultDivision = numberOne / numberTwo
  let resultRestDivision = numberOne % numberTwo
  
  alert(`A soma dos números é: ${resultSum}`)
  alert(`A Multiplacação dos números é: ${resultMult}`)
  alert(`A Subtração dos números é: ${resultSub}`)
  alert(`A Divisão dos números é: ${resultDivision}`)
  alert(`O Resto da divisão dos números é: ${resultRestDivision}`)

  
/**
 * Solução da aula
 * 
  let firstNumber = prompt("Digite o primeiro número ")
  let secondNumber = prompt("Digite o segundo número ")
  
  firstNumber = Number(firstNumber)
  secondNumber = Number(secondNumber)

  const sum = firstNumber + secondNumber
  const sub = firstNumber - secondNumber
  const mult = firstNumber * secondNumber
  const div = firstNumber / secondNumber
  const restDiv = firstNumber % secondNumber
  
  alert(`Soma: ${sum}`)
  alert(`Subtração: ${sub}`)
  alert(`Multiplacação: ${mult}`)
  alert(`Divisão: ${div}`)
  alert(`Resto da divisão: ${restDiv}`)
**/