const formulario = document.getElementById ("formulario")
formulario.addEventListener('submit', function(event){
    event.preventDefault()

    let  preco = document.getElementById('preco').value;
    let qtt = document.getElementById ('qtt').value;
    let dinheiro = document.getElementById('dinheiro').value;


    console.log(preco);
    console.log(qtt);
    console.log(dinheiro);


    let valor = (parseFloat(preco) * parseInt(qtt))
    let troco = dinheiro - valor
    let dinheiro2 =  troco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});



    document.getElementById('resultado').innerHTML = "O Troco da Compra será de "+dinheiro2

})
