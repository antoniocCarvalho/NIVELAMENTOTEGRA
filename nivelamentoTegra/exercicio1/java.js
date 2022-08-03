const formulario = document.getElementById ("formulario")
formulario.addEventListener('submit', function(event){
    event.preventDefault()

let larg = document.getElementById('largura').value;
let comp = document.getElementById('comprimento').value;
let valor = document.getElementById('valor').value;


console.log(larg)
console.log(comp)
console.log(valor)

var area = parseFloat(larg * comp);
var preco = parseFloat(valor * area);




document.getElementById('area').innerHTML = "A ÁREA DO TERRENO É DE "+area.toFixed(2)+ " METROS";
document.getElementById('preco').innerHTML = "O VALOR DO TERRENO É DE "+preco.toFixed(2)+ " REAIS";






})