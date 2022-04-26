/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

// for ... of
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

let patientsNames = []

for (let patient of patients) { 
  patientsNames.push(patient.name)
}

alert(patientsNames)  



/** 
 * For 
 * 
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

let patientsNames = []

for (let index = 0; index < patients.length; index++) {
  patientsNames[index] = patients[index].name
}

alert(patientsNames)  
*/