/* 
// Simulador interactivo de adivinanza de números

// Generar un número aleatorio entre 1 y 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Variable para almacenar el número de intentos
let intentos = 0;

// Función para iniciar el simulador
function iniciarSimulador() {
  // Reiniciar los valores iniciales
  intentos = 0;

  // Pedir al usuario que ingrese un número
  const numeroUsuario = parseInt(prompt("¡Bienvenido! Ingresa un número entre 1 y 100:"));

  // Verificar si el número ingresado es válido
  if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
    alert("¡Número inválido! Debes ingresar un número entre 1 y 100.");
    iniciarSimulador(); // Reiniciar el simulador
  } else {
    // Llamar a la función para adivinar el número
    adivinarNumero(numeroUsuario);
  }
}

// Función para adivinar el número
function adivinarNumero(numero) {
  // Incrementar el número de intentos
  intentos++;

  // Verificar si el número ingresado es el número secreto
  if (numero === numeroSecreto) {
    // El usuario adivinó el número
    alert(`¡Felicitaciones! Adivinaste el número en ${intentos} intentos.`);
  } else {
    // El usuario no adivinó el número, dar pistas
    let pista = numero < numeroSecreto ? "mayor" : "menor";
    alert(`Intento incorrecto. El número secreto es ${pista} que ${numero}.`);
    
    // Pedir al usuario que ingrese otro número
    const nuevoNumero = parseInt(prompt("Ingresa otro número:"));
    adivinarNumero(nuevoNumero); // Llamar de nuevo a la función para adivinar el número
  }
}

// Iniciar el simulador al cargar la página
iniciarSimulador(); */


// Simulador interactivo de adivinanza de números

// Generar un número aleatorio entre 1 y 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Variable para almacenar el número de intentos
let intentos = 0;

// Función para iniciar el simulador
function iniciarSimulador() {
  // Reiniciar los valores iniciales
  intentos = 0;

  // Pedir al usuario que ingrese el nivel de dificultad
  let nivel = "";
  do {
    nivel = prompt("Selecciona el nivel de dificultad: \n Facil \n Dificil \n Experto").toLowerCase();
  } while (nivel !== "facil" && nivel !== "dificil" && nivel !== "experto");

  // Obtener el número máximo de intentos según el nivel de dificultad seleccionado
  let maxIntentos;
  switch (nivel) {
    case "facil":
      maxIntentos = 10;
      break;
    case "dificil":
      maxIntentos = 5;
      break;
    case "experto":
      maxIntentos = 3;
      break;
  }

  // Llamar a la función para adivinar el número
  adivinarNumero(maxIntentos);
}

// Función para adivinar el número
function adivinarNumero(maxIntentos) {
  // Incrementar el número de intentos
  intentos++;

  // Verificar si se alcanzó el número máximo de intentos
  if (intentos > maxIntentos) {
    // El usuario agotó todos los intentos
    alert(` PERDISTE \n ¡Agotaste todos tus intentos! \n El número secreto era ${numeroSecreto}.`);
  } else {
    // Pedir al usuario que ingrese un número
  const numeroUsuario = parseInt(prompt(`Intento ${intentos}/${maxIntentos}. \n Ingresa un número entre 1 y 100:`));

    // Verificar si el número ingresado es válido
    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
      alert("¡Número inválido! \n Debes ingresar un número entre 1 y 100.");
      adivinarNumero(maxIntentos); // Llamar de nuevo a la función para adivinar el número
    } else {
      // Verificar si el número ingresado es el número secreto
      if (numeroUsuario === numeroSecreto) {
        // El usuario adivinó el número
        alert(` GANASTE \n ¡Felicitaciones!  \n Adivinaste el número en ${intentos} intentos.`);
      } else {
        // El usuario no adivinó el número, dar pistas
        let pista = numeroUsuario < numeroSecreto ? "mayor" : "menor";
        alert(`Intento incorrecto.\n El número secreto es ${pista} que ${numeroUsuario}.`);

        // Llamar de nuevo a la función para adivinar el número
        adivinarNumero(maxIntentos);
      }
    }
  }
}

// Iniciar el simulador al cargar la página
iniciarSimulador();
