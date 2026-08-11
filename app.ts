function calcularPuntosRacha(limiteDias: number): string {
    let puntosTotales = 0
    let diasEspeciales = 0

    for(let dia = 1; dia <= limiteDias; dia++ ){
        if(dia % 2 == 0 && !(dia % 5 == 0)){
            puntosTotales = puntosTotales + 20
        }else if(dia % 2 != 0 && !(dia % 5 == 0)){
            puntosTotales = puntosTotales + 10
        }else if(dia % 5 == 0){
            puntosTotales = puntosTotales + 50
            diasEspeciales = diasEspeciales + 1
        }
    }
    return `Puntos totales: ${puntosTotales}, Dias especiales: ${diasEspeciales}`
}

console.log(calcularPuntosRacha(5));
console.log(calcularPuntosRacha(3));
console.log(calcularPuntosRacha(1000000));