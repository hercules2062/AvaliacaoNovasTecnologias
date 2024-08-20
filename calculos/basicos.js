/**
 * Soma valores numéricos
 * @param  {...number} numeros Valores a serem somados
 * @returns Total da soma
 */
export function somarNumeros(...numeros) {
  return numeros.reduce((total, proximo) => total + proximo, 0);
}
