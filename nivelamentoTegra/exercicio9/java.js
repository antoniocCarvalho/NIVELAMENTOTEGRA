const formulario = document.getElementById ("formulario")
formulario.addEventListener('submit', function(event){
    event.preventDefault()


    let seg = ( document.getElementById('segundos').value);

    const horas = parseInt(seg / 3600);
    
    seg = seg % 3600;

    const minutos = parseInt(seg / 60)

    seg = seg % 60;




    document.getElementById('resultado').innerHTML = ""+horas+":"+minutos+":"+seg;

    console.log(horas)


   
    

})