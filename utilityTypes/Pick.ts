interface Book {
  title: string;
  pages: number;
  author: string;
  description: string;
}

const book1: Book = {
  title: "Programação do zero ao avançado",
  pages: 255,
  author: "Alguém muito importante",
  description: "Este Book necessita da descrição",
};

// Com o Pick, você informa as propriedades que deseja utilizar
const book3: Pick<Book, "title" | "author"> = {
  title: "",
  author: "",
};
