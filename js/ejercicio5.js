let a = parseFloat(prompt("Ingresa el primer número (5):"));
let b = parseFloat(prompt("Ingresa el Segundo número (5):"));

if (a > b) {
    console.log(a + " es mayor que " + b);
} else if (a < b) {
    console.log(b + " es mayor que " + a);
} else {
    console.log("Ambos números son iguales.");
}
