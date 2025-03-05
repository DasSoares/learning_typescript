// cria um objeto onde todas as chaves são strings e valores são números
const scores: Record<string, number> = {
  basic: 10,
  normal: 20,
  super: 30,
  "tes-tes": 40,
};

// limitar valores
type Profile = "admin" | "user" | "guest"; // | operador logico OR, union types
const user: Record<Profile, number> = {
  admin: 1,
  guest: 2,
  user: 3,
};

interface User {
  name: string;
  lastname?: string;
  email: string | null;
}

const users: Record<number, User> = {
  1: { name: "Danilo", lastname: "Soares", email: "danilo@email.com" },
  2: { name: "Carlos", email: null },
};

console.log(users[1].email);
console.log(typeof users[1].email);
