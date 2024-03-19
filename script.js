function resultado() {
    let nome = document.querySelector("#nome").value
    let altura = document.querySelector("#altura").value
    let peso = document.querySelector("#peso").value
    let text = document.querySelector(".resultado")
    let obLevel = ""
    let resul = (peso/(altura*altura)).toFixed(1)

    if (nome !== "" && altura !== "" && peso !== "") {
        if (resul <= 18.5) {
            obLevel = "abaixo do peso"
        } else if (resul > 18.6 && resul < 24.9) {
            obLevel = "com o peso ideal"
        } else if (resul > 25 && resul < 29.9) {
            obLevel = "levemente acima do peso"
        } else if (resul > 30 && resul < 34.9) {
            obLevel = "com obesidade grau I"
        } else if (resul > 35 && resul < 39.9) {
            obLevel = "com obesidade grau II"
        } else if (resul > 40) {
            obLevel = "com obesidade grau III"
        }

        text.style.color = "black"
        text.innerHTML = `Oi ${nome}, seu IMC é de ${resul} e você está ${obLevel}`
    } else {
        text.style.color = "black"
        text.innerHTML = `Digita direito`
    }





}