let value = 1234.98

console.log(value.toFixed(2)) // fixa um parametro pra uma casa decimal e aredonda melhor usar sempre 2 casas decimais
console.log(Math.ceil(value)) // apenas arredonda pra cima
console.log(Math.floor(value)) // arredonda para baixo
console.log(Math.round(value)) // comportamento parecido com o floor

// formatar para monetarismo brasileiro
console.log(
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL', 
    }).format(value)
)