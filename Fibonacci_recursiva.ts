function fibonacci(n: number): number {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function runner(n: number): void {
  let start = Date.now();
  let resps = fibonacci(n);
  let end = Date.now();
  let tempo = new Date(end - start).toISOString().slice(11, 19);
  console.log("Tempo de execução:", tempo);
  console.log("Posição:", n, "resultado:", resps);
}

if (process.argv.slice(2).length > 0) {
  const [num, ...others] = process.argv.slice(2);
  runner(parseInt(num));
}
