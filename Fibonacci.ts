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

console.log(fib(50));
