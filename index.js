import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 12356798734);
const cliente2 = new Cliente("Alice", 37498709887);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente(cliente2, 1992);

contaCorrenteRicardo.transferir(200, conta2);
console.log(conta2);
