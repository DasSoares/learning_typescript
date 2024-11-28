import Customer, { MinhaFuncao } from "./Customers";

const customer1 = new Customer("Danilo", "Soares", 33, "40767120809234");
const customer2 = new Customer("Danilo", "Soares", 33, "40767120809");
const customer3 = new Customer(
  "Danilo",
  "Soares",
  33,
  "4076712080913245675432"
);

const arrays = [customer1, customer2, customer3];

// indice do objeto
// for (let i in arrays) console.log(i);

// por cada objeto
for (let cust of arrays) {
  MinhaFuncao();
  cust.setDocumentWithMask();
  console.log(cust.type);
  console.log(cust.document);

  cust.removeDocumentMask();
  console.log(cust.document);
}
