// Imprime a contagem em uma label no console
const t1 = Date.now();
for (let i = 1; i < 1000000; i++) {
  process.stdout.write(`${i} \r`);
}
const t2 = Date.now();
// const resultado = new Date(t2 - t1).toISOString().slice(11, 19);
const resultado = new Date(t2 - t1).toISOString().split("T")[1].slice(0, -5);
console.log(`tempo de execução: ${resultado}`);
