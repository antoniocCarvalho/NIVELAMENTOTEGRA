const formulario = document.getElementById ("formulario")
formulario.addEventListener('submit', function(event){
    event.preventDefault()

    let  nome = document.getElementById('nome').value;
    let valor = document.getElementById ('valor').value;
    let horas = document.getElementById('horas').value;


    let valor2 = (parseFloat(valor) * parseInt(horas));

    var salario = valor2.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    document.getElementById('resultado').innerHTML = " O pagamento para "+nome+" deve ser "+salario

})