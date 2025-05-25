function findMax(arr) {
    console.log("Evaluando arreglo:", arr);

    // Caso base: si el arreglo tiene solo un elemento, ese es el máximo
    if (arr.length === 1) {
        console.log("Caso base alcanzado con:", arr[0]);
        return arr[0];
    }

    // Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    console.log("Dividiendo en:");
    console.log("  Izquierda:", left);
    console.log("  Derecha:", right);

    // Llamar recursivamente a la función para ambas mitades
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // Combinar las soluciones comparando los máximos
    const maximo = Math.max(leftMax, rightMax);
    console.log(`Máximo entre ${leftMax} y ${rightMax} es:`, maximo);

    return maximo;
}

// Ejemplo de entrada
const numbers = [3, 8, 2, 10, 5, 7];
const resultado = findMax(numbers);
console.log("Número máximo encontrado:", resultado);
