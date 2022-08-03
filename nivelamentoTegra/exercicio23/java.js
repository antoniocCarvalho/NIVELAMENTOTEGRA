const formulario = document.getElementById ("formulario")
formulario.addEventListener('submit', function(event){
    event.preventDefault()


    let num1 = document.getElementById('n1').value;
    let num2 = document.getElementById('n2').value;


    let n1 = parseInt(num1);
    let n2 = parseInt(num2);





   let total = 0;

   if (n1 < n2){

   for(let cont = n1+1; cont < n2; cont++){

       if(cont %2 !=0){

           total += cont;

       }

   }

   }else if(n2 > n1){

       for(cont = n2+1; cont < n1; cont++){

       

       if(cont %2 !=0){

           total += cont;

       }

   }

   }

   document.getElementById('soma').innerHTML = "Resultado = "+total;

})