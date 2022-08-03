const formulario = document.getElementById ("formulario")
formulario.addEventListener('submit', function(event){
    event.preventDefault()

    let num1 = document.getElementById('n1').value
    let num2 = document.getElementById('n2').value;
    let num3 = document.getElementById('n3').value;

    let n1 = parseFloat(num1);
    let n2 = parseFloat(num2);
    let n3 = parseFloat(num3);


    if (n1 > n2) {

        if (n1 > n3){
        document.getElementById('resultado').innerHTML = "o maior numero é    "+n1
      }   else  {
        document.getElementById('resultado').innerHTML = "o maior numero é    "+n3
                }
                  }    
     else  {
            if(n2 > n3){
              document.getElementById('resultado').innerHTML = "o maior numero é    "+n2
      }  else   {
              document.getElementById('resultado').innerHTML = "o maior numero é    "+n3
                }
     }


})