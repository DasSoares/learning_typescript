type DadosPessoa = {
  nome: string;
  sobrenome: string;
  idade?: any;
};

const pessoa: DadosPessoa = { nome: "Danilo", sobrenome: "Soares", idade: "1" };
// console.log(Object.keys(pessoa));
// console.log(Object.values(pessoa));
// console.log(Object.entries(pessoa)); // tipo o items() do python

// pode fazer assim
Object.entries(pessoa).forEach((item, index) => {
  const [key, value] = item;
  console.log(`chave: '${key}' - valor: '${value}'`);
});

// ou assim
for (const [key, value] of Object.entries(pessoa)) {
  console.log(key, value);
}
