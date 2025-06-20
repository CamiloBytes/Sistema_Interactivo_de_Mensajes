function getInput() {

    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let response = document.getElementById("response")
    document.getElementById("resp").style.boxShadow = "0px 0px 10px 10px white"
    age = parseInt(age)


    if (isNaN(age)) {
        response.innerHTML = `Error: Por favor, ingresa una edad en numeros`
    } else if (age < 18) {
        response.innerHTML = `Hola ${name} eres menor de edad. ¡Sigue aprendiendo y disfutando del codigo!`
    }

    if (age < 18) {
        response.innerHTML = `Hola ${name}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`
    } else {
        response.innerHTML = `Hola ${name}, eres mayor de edad. ¡Preparate para grandes oportunidades en el mundo de la programacion!`
    }
}
