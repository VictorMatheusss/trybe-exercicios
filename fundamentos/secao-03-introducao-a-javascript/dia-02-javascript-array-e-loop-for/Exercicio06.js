let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

// Exercicio 02
for (let index = 0; index < numbers.length; index+= 1) {
  soma += numbers[index];
}


console.log(soma);

// Exercicio 03

let media = soma / 10

console.log(media);

// Exercicio 04

if (media >20) {
  console.log('O valor da média aritmética é maior que 20');
}

if (media <20) {
  console.log('O valor da média aritmética é menor ou igual a 20');
}