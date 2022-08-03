const formulario = document.getElementById ("formulario")
formulario.addEventListener('submit', function(event){
    event.preventDefault()


    ///declarar variaveis//
        let nome1 = document.getElementById('nome').value;
        let idade1 = document.getElementById ('idade').value;
        let nome2 = document.getElementById('nome2').value;
        let idade2 = document.getElementById ('idade2').value;
        

    ///processar dados 

        console.log(nome1, idade1);
        console.log(nome2, idade2);
        var media = (parseInt(idade1 ) + parseInt(idade2))/2
      
        console.log(media)
       


    //retornar dados 

    document.getElementById('resultado').innerHTML = "A idade média de "+nome1+" e " +nome2+ " é de " +media+ " anos."

})