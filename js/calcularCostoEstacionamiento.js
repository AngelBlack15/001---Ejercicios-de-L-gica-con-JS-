alert("Ingrese el tiempo que utilizó el estacionamiento en horas y minutos por separado. Escriba 'salir' en cualquier momento para detener el sistema.");

function calcularCostoEstacionamiento(horas) {
    let costo;

    if (horas < 0.5) {
        costo = 0; // Menos de media hora, no se cobra nada
    } else if (horas >= 0.5 && horas < 2) {
        costo = 10; // Entre 30 minutos y 2 horas, 10 pesos
    } else if (horas >= 2 && horas < 3) {
        costo = horas * 25; // Entre 2 y 3 horas, 25 pesos por hora
    } else {
        costo = horas * 30; // Más de 3 horas, 30 pesos por hora
    }

    return costo;
}

// Función para interactuar con el usuario
function iniciarSistemaEstacionamiento() {
    let continuar = true;

    while (continuar) {
        // Preguntar las horas
        let horasIngresadas = prompt("Ingrese el número de horas (o escriba 'salir' para terminar):");
        if (horasIngresadas.toLowerCase() === "salir") {
            continuar = false;
            break;
        }

        // Preguntar los minutos
        let minutosIngresados = prompt("Ingrese el número de minutos (o escriba 'salir' para terminar):");
        if (minutosIngresados.toLowerCase() === "salir") {
            continuar = false;
            break;
        }

        // Convertir las entradas a números
        horasIngresadas = parseFloat(horasIngresadas);
        minutosIngresados = parseFloat(minutosIngresados);

        // Validación de entrada
        if (isNaN(horasIngresadas) || horasIngresadas < 0 || isNaN(minutosIngresados) || minutosIngresados < 0 || minutosIngresados >= 60) {
            alert("Por favor, ingrese un número válido de horas y minutos.");
        } else {
            // Convertir los minutos a horas y sumar a las horas
            const totalHoras = horasIngresadas + (minutosIngresados / 60);
            const costo = calcularCostoEstacionamiento(totalHoras);
            alert(`El costo total por ${horasIngresadas} horas y ${minutosIngresados} minutos (${totalHoras.toFixed(2)} horas) de estacionamiento es: $${costo}`);
        }
    }

    alert("Gracias por usar el sistema de estacionamiento.");
}

// Iniciar el sistema
iniciarSistemaEstacionamiento();
