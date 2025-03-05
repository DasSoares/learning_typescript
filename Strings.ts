const nome: string = "Danilo";

console.log(nome.charAt(0));
console.log(nome[0]);

interface String {
  isEmpty();
}

String.prototype.isEmpty = function () {
  return this.trim().length === 0;
};

console.log("".isEmpty());
console.log(" ".isEmpty());
console.log(" 1".isEmpty());
