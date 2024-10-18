const palabra = prompt("Ingresa una palabra:");
const palabraInvertida = palabra.split('').reverse().join('');
if (palabra.toLowerCase() === palabraInvertida.toLowerCase()) {
    alert("La palabra es un palíndromo.");
} else {
    alert("La palabra no es un palíndromo.");
}
