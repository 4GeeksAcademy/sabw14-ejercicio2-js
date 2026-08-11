**
 * Ejercicio (10 min): Variables, condicionales y bucles
 *
 * ENUNCIADO
 * Una app de hábitos calcula puntos por cada día completado (del 1 al limiteDias):
 * - Día divisible entre 5 (especial): 50 puntos
 * - Día par (y no especial): 20 puntos
 * - Día impar (y no especial): 10 puntos
 *
 * MISIÓN
 * Completa calcularPuntosRacha para que:
 * 1. Recorra los días con un bucle (for o while)
 * 2. Acumule los puntos totales
 * 3. Cuente cuántos días especiales hubo
 * 4. Devuelva: "Puntos totales: X | Días especiales: Y"
 *
 *
 * CASOS DE PRUEBA
 * | limiteDias | Resultado esperado                        |
 * |------------|-------------------------------------------|
 * | 5          | "Puntos totales: 110 | Días especiales: 1" |
 * | 3          | "Puntos totales: 40 | Días especiales: 0"  |
 * | 0          | "Puntos totales: 0 | Días especiales: 0"   |
 */

function calcularPuntosRacha(limiteDias: number): string {
  // Tu código aquí
  return "";
}

// Pruebas
console.log(calcularPuntosRacha(5));
// "Puntos totales: 110 | Días especiales: 1"

console.log(calcularPuntosRacha(3));
// "Puntos totales: 40 | Días especiales: 0"

console.log(calcularPuntosRacha(0));
// "Puntos totales: 0 | Días especiales: 0"

// Evita choque con resultado.ts (sin esto, TS une todos los .ts en un solo ámbito global)
export {};