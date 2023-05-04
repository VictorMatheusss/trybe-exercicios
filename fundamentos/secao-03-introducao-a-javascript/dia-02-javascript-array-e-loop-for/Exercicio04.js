let dado1 = Math.ceil(Math.random() * 6);

console.log('resultado do dado 01: ' + dado1);

let dado2 = Math.ceil(Math.random() * 6);

while (dado1 !== dado2) {
  dado2 = Math.ceil(Math.random() * 6)
  console.log('resultado do dado 02: ' + dado2);
}