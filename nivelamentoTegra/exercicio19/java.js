const formulario = document.getElementById ("formulario")
formulario.addEventListener('submit', function(event){
    event.preventDefault()


let salariO = document.getElementById('salario').value;

let salario = parseFloat (salariO);


if (salario <= 999){
   let salario20 =  salario + ((salario * 20) / 100);
   let aumento20 =  salario20 - salario;
    document.getElementById('novo').innerHTML = "Novo salário= "+salario20.toFixed(2)
    document.getElementById('aumento').innerHTML = "Aumento= "+aumento20.toFixed(2)
    document.getElementById('por100').innerHTML = "Porcentagem = 20 %"



}else{
    if(salario > 1000 && salario <= 2999){
    let salario15 = salario + ((salario * 15) / 100);
    let aumento15 = salario15 - salario;
    document.getElementById('novo').innerHTML = "Novo salário= "+salario15.toFixed(2)
    document.getElementById('aumento').innerHTML = "Aumento= "+aumento15.toFixed(2)
    document.getElementById('por100').innerHTML = "Porcentagem = 15 %"




    }else{
        if (salario > 3000 && salario <= 7999){
    let salario10 = salario + ((salario * 10) / 100);
    let aumento10 = salario10 - salario;
    document.getElementById('novo').innerHTML = "Novo salário= "+salario10.toFixed(10)
    document.getElementById('aumento').innerHTML = "Aumento= "+aumento10.toFixed(10)
    document.getElementById('por100').innerHTML = "Porcentagem = 10 %"



        }else{
            if (salario >8000){
    let salario05 = salario + ((salario * 5) / 100);
    let aumento05 = salario05 - salario;

    document.getElementById('novo').innerHTML = "Novo salário= "+salario05.toFixed(2)
    document.getElementById('aumento').innerHTML = "Aumento= "+aumento05.toFixed(2)
    document.getElementById('por100').innerHTML = "Porcentagem = 0.05 %"


            }
        }
    }

}


})
