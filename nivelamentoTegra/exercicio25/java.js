const formulario = document.getElementById ("formulario")
formulario.addEventListener('submit', function(event){
    event.preventDefault()



var nome = document.getElementById('nome').value
var mesInformado = document.getElementById('mes').value 
var diaDeNascimento = document.getElementById('dia').value

var mesJaneiro = ("Capricornio");
var mesFevereiro = ("Aquario");
var mesMarco = ("Peixes");
var mesAbril = ("Aries");
var mesMaio = ("Touro");
var mesJunho = ("Gemeos");
var mesJulho = ("Cancer");
var mesAgosto = ("Leao");
var mesSetembro = ("Virgem");
var mesOutubro = ("Libra");
var mesNovembro = ("Escorpiao");
var mesDezembro = ("Sagitario");

var mesDoSigno = 0;
var ano = 12;



    if(mesInformado == 1 && diaDeNascimento <= 19) {
        document.getElementById('result').innerHTML = "olá "+nome+ " seu signo é "+mesJaneiro;
        
    }

    else if(mesInformado == 2 && diaDeNascimento <= 18) {
        document.getElementById('result').innerHTML = "olá "+nome+ " seu signo é "+mesFevereiro
       
    }

    else if(mesInformado == 3 && diaDeNascimento <= 20) {
        document.getElementById('result').innerHTML = "olá "+nome+ " seu signo é "+mesMarco
        
    }

    else if(mesInformado == 4 && diaDeNascimento <= 19) {
        document.getElementById('result').innerHTML = "olá "+nome+ " seu signo é "+mesAbril
        
    }

    else if(mesInformado == 5 && diaDeNascimento <= 20) {
        document.getElementById('result').innerHTML = "olá "+nome+ " seu signo é "+mesMaio
        
    }

    else if(mesInformado == 6 && diaDeNascimento <= 20) {
        document.getElementById('result').innerHTML = "olá "+nome+ " seu signo é "+mesJunho
        
    }

    else if(mesInformado == 7 && diaDeNascimento <= 22) {
        document.getElementById('result').innerHTML = "olá "+nome+ " seu signo é "+mesJulho
        
    }

    else if(mesInformado == 8 && diaDeNascimento <= 22) {
        document.getElementById('result').innerHTML = "olá "+nome+ " seu signo é "+mesAgosto
        
    }    

    else if(mesInformado == 9 && diaDeNascimento <= 22) {
        document.getElementById('result').innerHTML = "olá "+nome+ " seu signo é "+mesSetembro
        
    }

    else if(mesInformado == 10 && diaDeNascimento <= 22) {
        document.getElementById('result').innerHTML = "olá "+nome+ " seu signo é "+mesOutubro
        
    }

    else if(mesInformado == 11 && diaDeNascimento <= 21) {
        document.getElementById('result').innerHTML = "olá "+nome+ " seu signo é "+mesNovembro
       
    }

    else if(mesInformado == 12 && diaDeNascimento <= 21) {
        document.getElementById('result').innerHTML = "olá "+nome+ " seu signo é "+mesDezembro
       
    }
}



)