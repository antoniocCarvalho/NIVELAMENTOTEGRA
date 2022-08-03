const formulario = document.getElementById ("formulario")
formulario.addEventListener('submit', function(event){
    event.preventDefault()

    let medidaA = document.getElementById("medidaA").value;
    let medidaB = document.getElementById("medidaB").value;
    let medidaC = document.getElementById("medidaC").value;



    



    let quadrado  = parseFloat((medidaA * 4));
    let triangulo = parseFloat((medidaA * medidaB)/2)

////////////////////

    let AreaT = parseFloat(medidaA + medidaB)
    let AreaT1 = parseFloat(medidaC * AreaT);
    let AreaT3 = parseFloat(AreaT1 /2);

////////////////////

    
        
    document.getElementById('quadrado').innerHTML = "ÁREA DO QUADRADO "+quadrado.toFixed(4)
    document.getElementById('triangulo').innerHTML = "ÁREA DO TRIANGULO "+triangulo.toFixed(4)
    document.getElementById('trapezio').innerHTML = "ÁREA DO TRAPEZIO "+AreaT3.toFixed(4)
   


})