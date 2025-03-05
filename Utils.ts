/**
 * Normaliza caracteres de latim e garante que eles sejam corretamente codificados em UTF-8
 * @param str Texto
 * @returns string
 */
function normalizeText(str: string): string {
  // A regex /[\u0300-\u036f]/g corresponde aos diacríticos Unicode.
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

async function retry<T>(fn: () => Promise<T>, retries: number): Promise<T> {
  try {
    return await fn();
  } catch (err) {
    if (retries > 0) {
      return await retry(fn, retries - 1);
    } else {
      throw err;
    }
  }
}

function cloneObject<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

function mergeObjects<T>(...objects: T[]): T {
  return Object.assign({}, ...objects);
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Mês baseado em zero
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((result, currentValue) => {
    const groupKey = currentValue[key] as unknown as string;
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(currentValue);
    return result;
  }, {} as Record<string, T[]>);
}

function reverseString(string: string): string {
  return string.split("").reverse().join("");
}

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

/**
 * Alguma coisa
 * @param {*} reverse Ordem decrescente
 * @param {*} toNumber Converte o array para o tipo numerico
 * @returns Retorna um Array ordenado
 */
interface Array<T> {
  sortCustom(reverse?: boolean, toNumber?: boolean): T[];
}
Array.prototype.sortCustom = function (
  reverse: boolean = false,
  toNumber: boolean = false
): number[] | string[] {
  if (toNumber)
    return this.map(Number).sort((a: number, b: number) =>
      reverse ? b - a : a - b
    );
  return this.sort((a: any, b: any) => (reverse ? b - a : a - b));
};
