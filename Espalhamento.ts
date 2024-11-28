// O Elipses ... é conhecido como espalhamento na função, é como se fosse o *args do python
let soma = (...numbers: number[]) =>
  numbers.reduce((preview, current) => preview + current);

const multiplicacao = (a: number, b: number) => a * b;

function subtracao(x: number, y: number, debug: boolean = false) {
  let result = x - y;
  if (debug) console.log(`Subtração de ${x} e ${y}: ${result}`);
  return result;
}

let sub = subtracao(24, 6, true);
console.log("Multiplicação:", multiplicacao(4, 6));
console.log("Soma com argumentos:", soma(1, 2, 3, 4, 5));
console.log("Soma com Espalhamento de Array:", soma(...[9, 5, 26, 3, 69]));
