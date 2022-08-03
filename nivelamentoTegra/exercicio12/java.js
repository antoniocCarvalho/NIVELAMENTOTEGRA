const formulario = document.getElementById ("formulario")
formulario.addEventListener('submit', function(event){
    event.preventDefault()

    let cA = document.getElementById('cA').value;
    let cB = document.getElementById('cB').value;
    let cC = document.getElementById('cC').value;


    let a = parseFloat (cA);
    let b = parseFloat (cB);
    let c = parseFloat (cC);

//valor de delta//
    let delta = b*b - (4*a*c)


    if (delta<0){
        document.getElementById('resultado').innerHTML = "Esta equação não possui raízes reais"
    }else{
        let x1 = (-b + Math.sqrt(delta) ) / (2*a)
        let x2 = (-b - Math.sqrt(delta) ) / (2*a)

        document.getElementById('x1').innerHTML = "x1 = "+x1.toFixed(4)
        document.getElementById('x2').innerHTML = "x2 = "+x2.toFixed(4)
    }
    
})