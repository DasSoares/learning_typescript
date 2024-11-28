import Time from "./Time";

function olaMundo(): string {
  return "Hello, world!";
}

const saudacao = (word: string): string => {
  return `Olá ${word}!`;
};

// Parametros opcionais
async function contador(c: number = 10): Promise<void> {
  const time = new Time();
  for (let i = 1; i <= c; i++) {
    await time.sleep(0.5);
    process.stdout.write(`contador: ${i}\r`);
  }
}

console.log(olaMundo());
console.log(saudacao("Gafanlhoto!"));

// modo de usar o método sem passar o parâmetro, utilize o undefined,
// que o valor do parâmetro será ignorado e será utilizado o valor do parâmetro
// utilize-o quando houver mais parâmetros opcionais e quiser ignorar algum deles
contador(undefined);
contador(100000);
// contador();
