const formulario = document.getElementById ("formulario")
formulario.addEventListener('submit', function(event){
    event.preventDefault()

let distancia = document.getElementById("distancia").value;
let combustivel = document.getElementById("combustivel").value;


console.log(distancia)
console.log(combustivel)

let consumoM = parseFloat( distancia) / parseFloat(combustivel);

console.log(consumoM)


document.getElementById('resultado').innerHTML = "O Consumo Médio do Seu Carro é de  "+consumoM.toFixed(3)+ "litros por km"


})