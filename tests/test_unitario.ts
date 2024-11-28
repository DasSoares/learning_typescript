import FetchAPI from "../fetchData";

interface cepData {
  cep: string;
  logradouro: string;
  complemento: string;
  unidade: string;
  bairro: string;
  localidade: string;
  uf: string;
  estado: string;
  regiao: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

// testar, ainda está com erros, entender melhor o funcionamento
test("deve obter os dados de um objeto do viacep", async () => {
  const api = new FetchAPI();
  const response: Record<string, string> = await api.Get(
    "https://viacep.com.br/ws/01001000/json/"
  );

  const expectedData: cepData = {
    cep: "01001-000",
    logradouro: "Praça da Sé",
    complemento: "lado ímpar",
    unidade: "",
    bairro: "Sé",
    localidade: "São Paulo",
    uf: "SP",
    estado: "São Paulo",
    regiao: "Sudeste",
    ibge: "3550308",
    gia: "1004",
    ddd: "11",
    siafi: "7107",
  };

  expect(response).toEqual(expectedData);
});
