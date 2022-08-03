const formulario = document.getElementById ("formulario")
formulario.addEventListener('submit', function(event){
    event.preventDefault()



    let escala1 = document.getElementById('escala').value;

    let escala = escala1[0].toUpperCase();
    

    let temp1 = document.getElementById('temp').value;

    let temp = parseFloat(temp1);
   



    if (escala == "F" ){

        document.getElementsByName('temp1')[0].placeholder = 'em Fahrenheit: ';
        let fC = (temp - 32) * 5/9;
        document.getElementById('resultado').innerHTML = "Temperatura equivalente em Celsius: "+fC.toFixed(2);

        

    }else{
        if(escala == "C" ){

            document.getElementsByName('temp1')[0].placeholder = 'em Celsius: ';
            let cF = temp * 9/5 + 32;
            document.getElementById('resultado').innerHTML = "Temperatura equivalente em Fahrenheit: "+cF.toFixed(2);

        }else{
            document.getElementById('resultado').innerHTML = "Digite Uma Escala Valida"
        }
    }



    console.log(escala)
})