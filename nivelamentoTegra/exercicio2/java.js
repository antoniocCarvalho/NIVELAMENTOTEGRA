const formulario = document.getElementById ("formulario")
formulario.addEventListener('submit', function(event){
    event.preventDefault()
        let base1 = document.getElementById('base').value;
        let altura1 = document.getElementById ('altura').value;

        console.log("base: "+base1);
        console.log ("altura: "+altura1);


    //processar dados//
    var area1 = base1 * altura1
    var perimeto1 = 2*base1 + 2*altura1
    var diagonal1 = Math.sqrt((Math.pow(base1, 2)) + Math.pow(altura1, 2));

    var areaR = area1.toFixed(4)
    var perimetro = perimeto1.toFixed(4)
    var diagonal = diagonal1.toFixed(4)

    document.getElementById('area').innerHTML = "ÁREA = "+areaR
    document.getElementById('perimetro').innerHTML = "PERÍMETRO = "+perimetro
    document.getElementById('diagonal').innerHTML = "DIAGONAL = "+diagonal


})