alert("Hola Mundo, adivina el nombre");
alert("Esta es una página cool para conocer gente, no aceptamos delincuentes");

// Lista de nombres posibles
const nombresPosibles = ["Carlos", "Ana", "Luis", "Sofía", "Pedro", "María", "José", "Laura"];
const nombreSecreto = nombresPosibles[Math.floor(Math.random() * nombresPosibles.length)]; // Selecciona un nombre aleatorio

let intentos = 1;
const maxIntentos = 3;
console.log(`El nombre secreto es: ${nombreSecreto}`); // Para pruebas

// Solicitar el primer intento del usuario
let nombreUsuario = prompt("Adivina un nombre (Ejemplo: Ana, Carlos, Luis, Sofía): ");

while (nombreUsuario !== nombreSecreto) {
    nombreUsuario = prompt("Inténtalo nuevamente. Adivina un nombre: ");
    
    if (nombreUsuario === nombreSecreto) {
        alert(`🎉 Felicitaciones! Acertaste el nombre secreto "${nombreUsuario}". Lo lograste en ${intentos} ${intentos === 1 ? "intento" : "intentos"}.`);
        break;
    } else {
        alert("❌ No es el nombre correcto. Sigue intentando.");
        intentos++;

        if (intentos > maxIntentos) {
            alert(`😞 Lo siento, has agotado tus ${maxIntentos} intentos. El nombre correcto era "${nombreSecreto}".`);
            break;
        }
    }
}