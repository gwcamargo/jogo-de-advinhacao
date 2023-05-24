var number_to_find = 0
var attemps = 0

function refresh() {

    attemps = 0
    number_to_find = parseInt(Math.random() * 100)

    console.log(number_to_find)
}

function verify_number() {
    var inumero = document.getElementById("inumero").value
    if (inumero > 100 || inumero < 1) {
        alert("Aposta inválida")
        return
    }

    if (inumero > number_to_find) {
        attemps++
        alert("O número para ser encontrado é menor")
    }

    else if (inumero < number_to_find) {
        attemps++
        alert("O número para ser encontrado é maior")
    } 

    else {
        alert(`Parabéns! Você acertou com ${attemps} erros`)
        refresh()
    }
}

refresh()