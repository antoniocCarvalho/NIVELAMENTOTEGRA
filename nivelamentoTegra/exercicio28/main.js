const formulario = document.getElementById ("formulario")
formulario.addEventListener('submit', function(event){
    event.preventDefault()

    let num1 = document.getElementById('n1').value;
    let num2 = document.getElementById('n2').value;
    let num3 = document.getElementById('n3').value;
    let num4 = document.getElementById('n4').value;
    let num5 = document.getElementById('n5').value;


    let n1 = parseInt(num1);
    let n2 = parseInt(num2);
    let n3 = parseInt(num3);
    let n4 = parseInt(num4);
    let n5 = parseInt(num5);

    var vetor1 = new Array();
    vetor1.push(n1, n2, n3, n4,n5);


var maior = Math.max.apply(null, vetor1 );
var menor = Math.min.apply(null, vetor1 );


document.getElementById('x1').innerHTML = "o maior numero é "+maior
document.getElementById('x2').innerHTML = "o menor numero é "+menor










})