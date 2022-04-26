/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

const patients = [
  {
    name: 'Felipe Dev',
    age: 36,
    weight: 100,
    height: 150,
  },
  {
    name: 'Paciente 0',
    age: 40,
    weight: 90,
    height: 190,
  },
  {
    name: 'Paciente forte',
    age: 19,
    weight: 70,
    height: 180,
  },
] 

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient) {
  return `
    Paciente ${patient.name} possui o IMC de
    ${IMC(patient.weight, patient.height)}
  `
}

for (let patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
}