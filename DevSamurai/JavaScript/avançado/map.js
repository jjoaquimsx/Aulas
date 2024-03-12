const number = [1, 2, 3, 4]
const persons = [
    {
        nome: 'Jota',
        age: 18,
        cidade: 'Nova Russas'
    }
]

const double = number.map((n) => n * 2)
console.log(double) // duplicar as variaveis

const cidade = persons.map((c) => c.cidade = 'Russas') // troca o valor da var cidade
console.log(persons) 