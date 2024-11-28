type Pessoa = {
  name: string;
  email: string;
};

type Funcionario = {
  employeeId: number;
  position: string;
};

type PessoaData = Pessoa & Funcionario;

const usr: PessoaData = {
  name: "Danilo",
  email: "teste@email.com",
  employeeId: 1,
  position: "Developer",
};
