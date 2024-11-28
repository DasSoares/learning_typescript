// é o contrario do Pick permite remover propriedades
interface Book {
  title: string;
  pages: number;
  author: string;
  description: string;
}

// Aqui é necessário o uso de todos os itens da interface
const book: Book = {
  title: "Programação do zero ao avançado",
  pages: 255,
  author: "Alguém muito importante",
  description: "Este Book necessita da descrição",
};

// no exemplo abaixo, você omit o valor do item que não quer preencher
// para incluir mais de 1, utilize a '|' exemplo: Omit<Book, "description" | "title">
const book2: Omit<Book, "description"> = {
  title: "Teste",
  pages: 255,
  author: "Teste sem descrição",
};
