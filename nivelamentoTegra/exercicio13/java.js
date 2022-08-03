const formulario = document.getElementById ("formulario")
formulario.addEventListener('submit', function(event){
    event.preventDefault()


    let minutos = document.getElementById('minutos').value;

    console.log(minutos)

    if (minutos > 100) {
        let valor = (minutos - 100) * 2.0 + 50.00;
        var dinheiro = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById('resultado').innerHTML = "Valor a pagar: "+dinheiro;

    }
    else {
        document.getElementById('resultado').innerHTML = "Valor a pagar: R$50.00"
    }

})