// Exemplos de Args e Kwargs do Python para NodeJs
// Desconstrução, Desestruturação

// Args
function myArgs(a: string, ...args: any): void {
  console.log(a, ...args);
}

myArgs("1", 2, 3, 4);

// --------------------------- Kwargs --------------------------- //
// Objeto de Parâmetros
function myKwargs(a: string, kwargs: object = {}): void {
  console.log(a, kwargs);
}

myKwargs("2", { nome: "Danilo", sobrenome: "Soares" });
