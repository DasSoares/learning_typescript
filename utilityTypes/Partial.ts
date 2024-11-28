interface Person {
  id: number;
  name: string;
  email: string;
}

const newPerson: Person = {
  id: 1,
  name: "Danilo",
  email: "soares1danilo@email",
};

// Torna todos os items opcionais
const updatePerson: Partial<Person> = {
  id: newPerson.id,
  name: "Danilo Carlos Soares",
};
