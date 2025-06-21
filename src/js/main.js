function getInput() {
    // Get the value entered in the "name" input field
    let name = document.getElementById("name").value

    // Get the value entered in the "name" input field
    let age = document.getElementById("age").value

    // Get the HTML element where the response message will be displayed
    let response = document.getElementById("response")

    // Apply CSS styles to the response container (box shadow and blur effect)
    document.getElementById("response_container").style.boxShadow = "0px 0px 10px 10px #2531db"
    document.getElementById("response_container").style.backdropFilter = "blur 80px"
    
     // Convert the age input from string to an integer
    age = parseInt(age)

    // Check if the name field is empty, display an error message if true
    if (name.trim() == ('')) {
        response.innerHTML = "Error: Ingrese el Nombre"
    } 
     // Check if the age input is not a valid number, display an error message if true
    else if (isNaN(age)) {
        response.innerHTML = `Error: Por favor, ingresa una edad en numeros`
    }
    // Check if the user is a minor (under 18 but older than 0)
    else if (age < 18 && age >= 1) {
        response.innerHTML = `Hola ${name}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`
    } 
    
    // If the user is 18 or older, they are considered an adult
    else {
        response.innerHTML = `Hola ${name}, eres mayor de edad. ¡Preparate para grandes oportunidades en el mundo de la programacion!`
    }

}
