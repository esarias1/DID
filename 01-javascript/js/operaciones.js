export function sumar(a, b){
    return a + b;
}

export function restar(a, b){
    return a - b;
}

export function multiplicar(a, b) {
    return a * b;
}

export function dividir(a, b) {
    if (b === 0){
        throw new error("No se puede dividir entre 0");
    }
    return a / b;
}