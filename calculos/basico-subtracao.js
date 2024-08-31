/**
 * Subtrai, como valores numéricos, valores em strings
 * @param  {...number} numeros Valores a serem subtraídos
 * @returns Total da subtração
 */
export function subtrairStrings(...numeros) {
  const valores = numeros.map((n) => Number(n));
  return subtrairNumerosArray(valores);
}
