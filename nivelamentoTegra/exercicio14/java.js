const formulario = document.getElementById ("formulario")
formulario.addEventListener('submit', function(event){
    event.preventDefault()

    let  preco1 = document.getElementById('preco').value;
    let qtt1 = document.getElementById ('qtt').value;
    let dinheiro1 = document.getElementById('dinheiro').value;

    let preco = parseFloat(preco1);
    let qtt = parseInt(qtt1);
    let dinheiro = parseFloat(dinheiro1);



    let valor = preco * qtt


    if (valor > dinheiro){

        let falta =  dinheiro - valor
        var falta1 = falta.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById('falta').innerHTML = "DINHEIRO INSUFICIENTE. FALTAM "+falta1


    }else{
    
        let troco =  valor -  dinheiro
        var troco1 = troco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById('troco').innerHTML = "TROCO É DE "+troco1
    }




//document.getElementById('resultado').innerHTML = "O Troco da Compra será de    "+ dinheiro2

})