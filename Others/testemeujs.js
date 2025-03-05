let arr = ["1", 2, "7", 4, "6", 9, "11", "03"];
// arr = arr.map(Number);
// arr.sort((a, b) => a - b); // funciona assim, agora como, não faço ideia
// console.log(arr);

const sortArray = (lista, reverse = false, convertToNumber = false) => {
  if (convertToNumber) {
    return lista.map(Number).sort((a, b) => (reverse ? b - a : a - b));
  }
  return lista.sort((a, b) => (reverse ? b - a : a - b));
};

Array.prototype.sum = function () {
  return this.reduce((acc, curr) => acc + Number(curr), 0);
};

/**
 *
 * @param {*} reverse Ordem decrescente
 * @param {*} toNumber Converte o array para o tipo numerico
 * @returns Retorna um Array ordenado
 */
Array.prototype.sortCustom = function (reverse = false, toNumber = false) {
  if (toNumber) {
    return this.map(Number).sort((a, b) => (reverse ? b - a : a - b));
  }
  return this.sort((a, b) => (reverse ? b - a : a - b));
};

// console.log(arr.sortCustom());
// console.log(arr.sortCustom(true, false));
console.log(arr.sortCustom(false, true));
// console.log(arr.sortCustom(true, true));
