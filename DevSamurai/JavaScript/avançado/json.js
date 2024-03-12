people = [
{
    id: 1,
    name: 'Felipe',
    lastName: 'Fontoura',
    bornDate: new Date(1982, 1, 18),
    addres: {
        city: 'Sao Jose dos campos'
    },
},
{
    id: 2,
    name: "Eduardo",
    latName: "Moraes",
    bornDate: new Date(2001, 2, 5),
    addres: {
        city: "Recife"
    },
},
{
    id: 3,
    name: "Joaquim",
    lastName: "Pedro",
    bornDate: new Date(2005, 7, 7),
    addres:{
        city: "Santo Antonio"
    }
}
]

console.log(people)
console.log(JSON.stringify(people))
console.log(JSON.parse(people)) // tras de volta para objeto

//JSON serve para formatar o codigo em string usado para passar as informacoes em outras linguagens 