const formulario = document.getElementById ("formulario")
formulario.addEventListener('submit', function(event){
    event.preventDefault()

let n10 = document.getElementById('n1').value 
let n20 = document.getElementById('n2').value 


let n1 = parseInt(n10);
let n2 = parseInt(n20);


    if(n1>n2 || n1 == n2) {
        var resultado = n1/n2;
        if(Number.isInteger(resultado)){
            document.getElementById('resultado').innerHTML = 'Os números são múltiplos';
        }else{
            document.getElementById('resultado').innerHTML ='Os números não são múltiplos';
        };
      }else {
        var resultado = n2/n1;
        if(Number.isInteger(resultado)){
            document.getElementById('resultado').innerHTML = 'Os números são múltiplos';
        }else{
            document.getElementById('resultado').innerHTML = 'Os números não são múltiplos';
        };
      }
})