const formulario = document.getElementById ("formulario")
formulario.addEventListener('submit', function(event){
    event.preventDefault()


    const vogais = ["a", "e", "i", "o", "u"]
    const consoantes = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"]


function countVowel(str) {
    let count = 0;

    for (let letter of str.toLowerCase()) {
        if (vogais.includes(letter)) {
            count++;
        }
    }

    return count
}


function countConso(str) {
  let count1 = 0;

  for (let letter of str.toLowerCase()) {
      if (consoantes.includes(letter)) {
          count1++;
      }
  }

  return count1
}





var string = document.getElementById('palavra').value;



const result = countVowel(string);
const result1 = countConso(string);



console.log(result);
document.getElementById('x0').innerHTML = "Vogais "+result
console.log(result1);
document.getElementById('x1').innerHTML = "Consoantes "+result1



})