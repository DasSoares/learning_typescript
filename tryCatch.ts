class ValueError extends Error {}

const validateName = (name: string) => {
  if (name != "Danilo") throw new Error("Nome Incorreto");
};

async function getFetchData(url: string): Promise<Response> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erro HTTP! status: ${response.status}`);
    }
    return response;
  } catch (error) {
    console.log("erro ao obter os dados da requisição:", error);
    throw (error as Error).message;
  }
}

const dataCats = getDataCats();

async function getDataCats(): Promise<null | undefined> {
  const response = await getFetchData("https://catfact.ninja/facts");
  if (!response || !response.ok) return null;
  const data = await response.json();
  console.log("Dados da requisição:", data);
}

if (dataCats != null) {
  console.log(dataCats);
}
// validateName("Danilo Carlos Soares");
