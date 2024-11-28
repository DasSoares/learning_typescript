/**
 * Realiza a soma com base em um Array de numbers
 * @param numbers
 * @returns Retorna a soma
 */
function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
// Exemplo de uso
const array: number[] = [1, 2, 3, 4, 5];
const sum: number = sumArray(array);
console.log(sum);
