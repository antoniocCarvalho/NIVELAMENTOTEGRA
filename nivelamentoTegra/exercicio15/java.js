const formulario = document.getElementById ("formulario")
formulario.addEventListener('submit', function(event){
    event.preventDefault()

let glicoseE = document.getElementById('glicose').value;
let glicose = parseFloat(glicoseE);

if (glicose <= 100){

    document.getElementById('resultado').innerHTML = "normal"

}else{
    if(glicose > 100 && glicose <= 140){
    document.getElementById('resultado').innerHTML = "elevado"


    }else{
        if(glicose > 140){
    document.getElementById('resultado').innerHTML = "diabetes"
        }
    }
}





})