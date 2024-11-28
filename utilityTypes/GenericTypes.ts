/* ------------------------------------------------------------- */

function identity<T>(arg: T): T {
  return arg;
}

const result1 = identity<string>("Hello");
const result2 = identity<number>(42);

console.log(result1); // Saída: Hello
console.log(result2); // Saída: 42

/* ------------------------------------------------------------- */

interface Box<T> {
  content: T;
}

const stringBox: Box<string> = { content: "This is a string" };
const numberBox: Box<number> = { content: 100 };

console.log(stringBox.content); // Saída: This is a string
console.log(numberBox.content); // Saída: 100

/* ------------------------------------------------------------- */

class DataHolder<T> {
  private data: T;

  constructor(data: T) {
    this.data = data;
  }

  getData(): T {
    return this.data;
  }

  setData(data: T): void {
    this.data = data;
  }
}

const stringHolder = new DataHolder<string>("Initial Data");
console.log(stringHolder.getData()); // Saída: Initial Data
stringHolder.setData("Updated Data");
console.log(stringHolder.getData()); // Saída: Updated Data

/* ------------------------------------------------------------- */

function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}

console.log(getLength("Hello")); // Saída: 5
console.log(getLength([1, 2, 3])); // Saída: 3

// Isso causaria um erro porque o objeto não tem uma propriedade 'length'
// console.log(getLength(42));

/* ------------------------------------------------------------- */

interface Usuario {
  id: number;
  name: string;
  email?: string;
}

type UsuarioRecord = Record<number, Usuario>;

const usuariosRecord: UsuarioRecord = {
  1: { id: 1, name: "Alice", email: "alice@example.com" },
  2: { id: 2, name: "Bob", email: "bob@example.com" },
  3: { id: 3, name: "Danilo" },
};

console.log(usuariosRecord[1].name); // Saída: Alice

/* ------------------------------------------------------------- */

// Função Genérica
async function fecthData<T>(
  url: string,
  method: string = "GET"
): Promise<T | null> {
  const response = await fetch(url, { method });
  if (!response.ok) {
    throw new Error("Erro na requisição");
  }
  return response.json() || null;
}

async function fecthPOSTData<T>(
  url: string,
  method: string = "GET"
): Promise<T | null> {
  const dataPost = {
    headers: {},
    body: {},
  };

  if (method === "POST") {
    dataPost.headers = { "Content-Type": "application/json" };
    dataPost.body;
  }

  const response = await fetch(url, { method });
  if (!response.ok) {
    throw new Error("Erro na requisição");
  }
  return response.json() || null;
}

async function getUsers() {
  // O fecthData será do tipo, Array de Usuario
  const users = await fecthData<Usuario[]>("http://localhost:8000/users");
  return users;
}

/* ------------------------------------------------------------- */
