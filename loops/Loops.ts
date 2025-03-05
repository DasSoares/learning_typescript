const _length: number = 10;

for (let c = 0; c <= _length; c++) {
  console.log("valor de c:", c);
}
console.log("\n");

// of
const arrayNumbers: number[] = [1, 5, 3, 6, 2, 7, 9];
for (let o of arrayNumbers) {
  console.log("valor de o:", o);
}
console.log("\n");

// in
for (let i in arrayNumbers) {
  console.log("valor de i:", i);
}
console.log("\n");

// tabuada
function printTabuada(nt: number) {
  for (let n = 0; n <= 10; n++) {
    let re = nt * n;
    console.log(`${nt} x ${n.toString().padEnd(2)} = ${re}`);
  }
}

printTabuada(2);
printTabuada(4);
printTabuada(22);
printTabuada(6);
