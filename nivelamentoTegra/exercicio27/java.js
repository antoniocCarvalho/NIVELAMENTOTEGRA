const formulario = document.getElementById ("formulario")
formulario.addEventListener('submit', function(event){
    event.preventDefault()



let texto = document.getElementById('n').value

const reverso = texto.split('').reverse().join(''); 



if(texto === reverso) {
    document.getElementById('resultado').innerHTML ="A palavra "+texto+" é um palíndromo!"


   console.log(`A palavra ${texto} é um palíndromo!`);
} else {
   document.getElementById('resultado').innerHTML ="A palavra "+texto+" não é um palíndromo!"


   console.log(`A palavra ${texto} não é um palíndromo!`);
}
})