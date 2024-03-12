const people = [
    {nome: `Jota`, age: `18`, cidade: `Lagoa De Santo Antonio`, gender: 'M'},
    {nome: `Diego`, age: `19`, cidade: `Lagoa De Santo Antonio`, gender: 'M'},
    {nome: `Ana`, age: `20`, cidade: `Nova Russas`, gender: 'F'},
]

var idade = people.filter((P) => P.age <=18) // filtra o ano
var city = people.filter((P) => P.cidade == 'Nova Russas') // filtra a cidade

var cityage = people.filter((P) => P.age <= 18 && P.cidade == `Lagoa De Santo Antonio`) // filtra a cidade e a idade 

console.log(cityage)
