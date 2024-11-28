//

if (process.argv.slice(2).length > 0) {
  // console.log("args:", process.argv.slice(2));
  const [a, ...b] = process.argv.slice(2);
  console.log("valor de a:", a, "valor de b:", b);
} else {
  console.log("Não tem nada");
}
