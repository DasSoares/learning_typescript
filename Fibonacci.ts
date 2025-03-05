function fib(n: number): number {
  let first = 0;
  let second = 1;
  let count = 0;

  while (count < n) {
    let next = first + second;
    first = second;
    second = next;
    count++;
  }
  return first;
}

const init = Date.now();
console.log(fib(100));
const end = Date.now();
const tempo = new Date(end - init).toISOString().split("T")[1].slice(0, -5);
console.log(`Tempo de execução: ${tempo}`);
