/**
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcule a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

// Meu código antes da aula
let student = prompt("Informe seu nome ");
let note1 = Number(prompt("Informe sua primeira nota "));
let note2 = Number(prompt("Informe sua segunda nota "));
let note3 = Number(prompt("Informe sua terceira nota "));
let average = (note1 + note2 + note3) / 3;

if (average > 6) {
  alert(`Parabéns ${student} passou de  bimestre sua nota é: ${average}`);
} else {
  alert(
    student +
      " você não obteve uma boa nota esse bimestre, sua nota é: " +
      average +
      ", mas você pode recupar, bons estudos para a prova de recuperação"
  );
}

/**
 * Código da aula 
 * 
let student = prompt("Qual o nome do(a) aluno(a)?")
let n1 = prompt("Qual a nota da primeira prova?")
let n2 = prompt("Qual a nota da segunda prova?")
let n3 = prompt("Qual a nota da terceira prova?")

let average = (Number(n1) + Number(n2) + Number(n3)) / 3

let result = average > 6

average = average.toFixed(2)

if (result) {
  alert("Parabéns, " + student + "! Sua média foi de: " + average)
} else if (average < 3) {
  alert("Reprovado")
} else {
  alert(student + " estude para sua prova de recuperação! Sua média foi de: " +  average)
}
*/