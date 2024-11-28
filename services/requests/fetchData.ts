/**
 *
 */

export default class FetchAPI {
  constructor() {}

  // Get funcionando
  async Get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erro ao obter os dados, erro: ${await response.text()}`);
    }
    return (await response.json()) as T;
  }

  //! Precisa ser testado
  async Post<T>(url: string, data: object): Promise<T> {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok)
        throw new Error(
          `Erro no envio dos dados, erro: ${await response.text()}`
        );

      return (await response.json()) as T;
    } catch (error) {
      throw new Error(
        `Erro na requisição POST, erro: ${(error as Error).message}`
      );
    }
  }
}
