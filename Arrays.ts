/**
 *
 * @param length
 * @param init
 * @returns
 */
function generateList(length: number = 10, init: number = 0) {
  return Array.from({ length: length }, (_, i) => i + init);
}

function removeArrayDuplicates<T>(array: T[]): T[] {
  return [...new Set(array)];
}

let usuario: [string, number] = ["Alice", 25];

let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Extrair valores de arrays usando desestruturação ...rest
let [first, second, ...rest] = [1, 2, 3, 4, 5];
// first = 1, second = 2, rest = [3,4,5]

const listSqrt = () => Array.from({ length: 10 }, (_, i) => (i + 1) ** 2);
console.log(listSqrt());

// ignorar parâmetros opcionais
console.log(generateList(undefined, undefined));

console.log(generateList(undefined, 1));
console.log(generateList(10, 2));
