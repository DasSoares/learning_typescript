const fs = require("fs");

// Simula os últimos 20 sorteios da Mega-Sena
const ultimosSorteios = [
  [2, 4, 15, 28, 34, 39],
  [10, 24, 33, 35, 41, 46],
  [8, 25, 49, 52, 55, 56],
  [5, 11, 13, 33, 45, 46],
  [1, 6, 24, 47, 55, 58],
  [14, 24, 25, 31, 33, 60],
  [1, 20, 32, 43, 57, 59],
  [17, 21, 26, 28, 32, 60],
  [25, 27, 33, 46, 48, 56],
  [1, 13, 19, 46, 50, 57],
  [1, 31, 38, 40, 45, 60],
  [3, 9, 18, 54, 59, 60],
  [1, 3, 15, 25, 45, 52],
  [3, 6, 14, 33, 55, 58],
  [13, 16, 33, 43, 46, 55],
  [3, 9, 14, 20, 28, 52],
  [7, 9, 25, 37, 57, 59],
  [16, 22, 33, 34, 49, 59],
  [2, 3, 11, 25, 37, 43],
  [29, 32, 40, 42, 49, 58],
];

// Função para calcular a frequência de cada número
function calcularFrequencia(sorteios) {
  const frequencias = {};

  sorteios.forEach((jogo) => {
    jogo.forEach((numero) => {
      frequencias[numero] = (frequencias[numero] || 0) + 1;
    });
  });

  return frequencias;
}

// Função para sugerir os próximos números com base nas frequências
function sugerirNumeros(frequencias, quantidade = 6) {
  const numerosOrdenados = Object.entries(frequencias)
    .sort(([, a], [, b]) => b - a) // Ordena por frequência decrescente
    .slice(0, quantidade) // Pega os números mais frequentes
    .map(([numero]) => parseInt(numero)); // Converte para número

  return numerosOrdenados;
}

// Calcula as frequências e sugere números
const frequencias = calcularFrequencia(ultimosSorteios);
const numerosSugeridos = sugerirNumeros(frequencias);

console.log("Frequências dos números:", frequencias);
console.log("Números sugeridos para o próximo sorteio:", numerosSugeridos);

// Salvar as informações em um arquivo
fs.writeFileSync(
  "resultadoMegaSena.json",
  JSON.stringify(
    {
      frequencias,
      numerosSugeridos,
    },
    null,
    2
  )
);
