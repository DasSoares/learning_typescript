import ICustomer from "../interfaces/Customer";

class CustomerService {
  private customers: ICustomer[] = new Array();
  private nextId: number = 1;

  add(
    name: string,
    lastname: string,
    birth: Date,
    email: string
  ): ICustomer | Error {
    if (this.isEmailTaken(email)) {
      console.log(email);
      throw new Error(`O email ${email} já está em uso!`);
    }
    const newCustomer: ICustomer = {
      id: this.nextId,
      name,
      lastname,
      birth,
      email,
    };
    this.customers.push(newCustomer);
    this.nextId++;
    return newCustomer;
  }

  // se remover a Tipagem, ele coloca qual vai ser o retorno da função
  get(id: number): ICustomer | null {
    const customer = this.customers.find((customer) => customer.id === id);
    return customer ? customer : null;
  }

  all(): ICustomer[] {
    return this.customers;
  }

  update(
    id: number,
    name: string,
    lastname: string,
    birth: Date,
    email: string
  ): ICustomer | null {
    const customer = this.get(id);
    if (customer) {
      if (customer.email !== email && this.isEmailTaken(email)) {
        throw new Error(`O E-mail ${email} já está em uso!`);
      }
      customer.name = name ? name : customer.name;
      customer.lastname = lastname ? lastname : customer.lastname;
      customer.birth = birth ? birth : customer.birth;
      return customer;
    }
    return null;
  }

  delete(id: number): boolean {
    const index = this.customers.findIndex((customer) => customer.id === id);
    if (index !== -1) {
      this.customers.splice(index, 1);
      return true;
    }
    return false;
  }

  // Helper method to check if email is taken
  private isEmailTaken(email: string): boolean {
    return this.customers.some((customer) => customer.email === email);
  }
}

const customer = new CustomerService();
customer.add(
  "Danilo",
  "Soares",
  new Date("1991-07-12"),
  "soares1danilo@email.com"
);
customer.add(
  "Carlos",
  "Soares",
  new Date("1991-07-12"),
  "soares1carlos@email.com"
);
customer.add(
  "Danilo",
  "Soares",
  new Date("1991-07-12"),
  "soares1danilo@email.com"
);
