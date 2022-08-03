const formulario = document.getElementById ("formulario")
formulario.addEventListener('submit', function(event){
    event.preventDefault()


    let x = document.getElementById('valor').value;
    let valor = parseInt(x);


   let cont1 = valor * 1 
   document.getElementById('v1').innerHTML = +valor+ " x 1 = "+cont1

   let cont2 = valor * 2 
   document.getElementById('v2').innerHTML = +valor+ " x 2 = "+cont2

   let cont3 = valor * 3 
   document.getElementById('v3').innerHTML = +valor+ " x 3 = "+cont3

   let cont4 = valor * 4 
   document.getElementById('v4').innerHTML = +valor+ " x 4 = "+cont4

   let cont5 = valor * 5 
   document.getElementById('v5').innerHTML = +valor+ " x 5 = "+cont5

   let cont6 = valor * 6 
   document.getElementById('v6').innerHTML = +valor+ " x 6 = "+cont6

   let cont7 = valor * 7 
   document.getElementById('v7').innerHTML = +valor+ " x 7 = "+cont7

   let cont8 = valor * 8 
   document.getElementById('v8').innerHTML = +valor+ " x 8 = "+cont8

   let cont9 = valor * 9 
   document.getElementById('v9').innerHTML = +valor+ " x 9 = "+cont9

   let cont10 = valor *10 
   document.getElementById('v10').innerHTML = +valor+ " x 10 = "+cont10



})