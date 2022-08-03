const formulario = document.getElementById ("formulario")
formulario.addEventListener('submit', function(event){
    event.preventDefault()

    let valor = document.getElementById('valor').value;

     var valorR = 3.14159 * (Math.pow(valor, 2));

    document.getElementById('resultado').innerHTML = "o Valor é "+valorR.toFixed(3)

})