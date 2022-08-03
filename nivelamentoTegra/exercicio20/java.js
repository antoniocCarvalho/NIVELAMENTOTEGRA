const formulario = document.getElementById ("formulario")
formulario.addEventListener('submit', function(event){
    event.preventDefault()


    let num1 = document.getElementById('n1').value;
    let num2 = document.getElementById('n2').value;


    let n1 = parseInt(num1);
    let n2 = parseInt(num2);

    var soma = parseInt (soma=0)

		for( var i = n1; i <=n2; i++ ) {
			
			soma +=i;
		
		}document.getElementById('soma').innerHTML = "Resultado = "+soma;


    })