var pesopaciente = prompt(`Digite seu peso: `);
var alturapaciente = prompt(`Agora sua altura: `);

var imc = pesopaciente / (alturapaciente * 2);

if (imc < 18.5){
    alert(`Seu IMC é de ${imc}, e está abaixo do ideal`)
}if(imc > 24.5){
    alert(`Seu IMC é de ${imc}, e está acima da media`)
}else{
    alert(`Seu IMC é de ${imc}, e esta correto`)
}