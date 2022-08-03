const formulario = document.getElementById ("formulario")
formulario.addEventListener('submit', function(event){
    event.preventDefault()


    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;


///Convertendo String para número//
    let nota1 = parseFloat (n1);
    let nota2 = parseFloat (n2);


    let notaF = nota1 + nota2


    document.getElementById('nota').innerHTML = "Sua média final é: "+notaF.toFixed(1);


    if (notaF >= 60.0){
        document.getElementById('resultado').innerHTML = "APROVADO"
    } else{
        document.getElementById('resultado').innerHTML = "REPROVADO"
    }

 

})