import { ECustomer } from "../enums/Customer";

export default class Customer {
  public name: string;
  public lastName: string;
  public age: number;
  public document: string;

  constructor(name: string, lastName: string, age: number, document: string) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.document = document;
  }

  removeDocumentMask() {
    this.document = this.document.replace(/\D/g, "");
  }

  get type() {
    const doc = this.document.replace(/\D/g, "");
    if (doc.length === ECustomer.CPF) {
      return "CPF";
    } else if (doc.length === ECustomer.CNPJ) {
      return "CNPJ";
    } else {
      throw new Error("Documento inválido!");
    }
  }

  setDocumentWithMask() {
    this.removeDocumentMask();
    let s: string;
    if (this.document.length == 11) {
      s = this.document
        .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4")
        .slice(0, 14);
    } else if (this.document.length == 14) {
      s = this.document
        .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "$1.$2.$3/$4-$5")
        .slice(0, 18);
    } else {
      throw new Error("Documento invalido!");
    }

    if (s.search(/\D/g) == -1) {
      throw new Error("Documento invalido!");
    }
    this.document = s;
  }

  getDocumentWithoutMask() {
    return this.removeDocumentMask();
  }
}

export function MinhaFuncao() {
  console.log("minha função teste");
}
