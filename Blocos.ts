/**
 *
 */
function main(): void {
  let num: number = 3;

  if (true) {
    // é possível declarar variaveis com o mesmo nome dentro de blocos diferentes com valores diferentes
    let num: number = 6;
    console.log("Valor de num dentro do bloco:", num);
  }
  console.log("Valor de num fora do bloco:", num);
}

main();
