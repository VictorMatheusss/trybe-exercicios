let saldo = 100;

function adicionaSaldo(valor) {
  return valor + saldo
}

function subtraiSaldo(valor) {
  return saldo - valor
}

function multiplicaSaldo(valor) {
  return valor * saldo
}

function divideSaldo(valor) {
  return saldo / valor
}

console.log(adicionaSaldo(100));
console.log(subtraiSaldo(50));
console.log(multiplicaSaldo(2));
console.log(divideSaldo(2));