const entrada = prompt("Ingresa un número:");
if (!isNaN(entrada) && entrada.trim() !== "") {
    alert("Es un número válido.");
} else {
    alert("Error: No ingresaste un número válido.");
}
