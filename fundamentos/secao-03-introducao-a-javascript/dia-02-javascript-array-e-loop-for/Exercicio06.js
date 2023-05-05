let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

// Exercicio 02
for (let index = 0; index < numbers.length; index+= 1) {
  soma += numbers[index];
}


console.log(soma);

// Exercicio 03

let media = soma / numbers.length

console.log(media);

// Exercicio 04

if (media >20) {
  console.log('O valor da média aritmética é maior que 20');
}

else  {
  console.log('O valor da média aritmética é menor ou igual a 20');
}

// Exercicio 05

let numeroMaior = numbers[0]

for (let index = 1; index < numbers.length; index+= 1) {
  if (numbers[index] > numeroMaior) {
    numeroMaior = numbers[index]
  }
  
}

console.log(numeroMaior);


// Exercicio 06

let numeroImpares = 0;

for (let index = 0; index < numbers.length; index+= 1) {
if (numbers[index] % 2 !== 0) {
  numeroImpares += 1
}
}

if (numeroImpares === 0) {
  console.log('numeros impares não encontrados');
}

else {
  console.log(numeroImpares);
}

// Exercicio 07

let numeroMenor = numbers[0]

for (let index = 1; index < numbers.length; index+=1) {
  if (numbers[index] < numeroMenor) {
   numeroMenor = numbers[index] 
  }
  
}

console.log(numeroMenor);

// Exercicio 08

let novaArray = [];

for (let index = 1; index <=25; index+= 1) {
  novaArray.push[index]
  
}

console.log(novaArray);


// Exercicio 09 não entendi

for (let index = 0; index < novaArray.length; index+= 1) {
  console.log(novaArray[index] / 2);
  
}


// Exercicio 10 não entendi


let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

console.log(fatorial);

// Exercicio 11

let word = 'Vinicius'
let reverseWord = ''

for (let index = 0; index < word.length; index+=1 ) {
  reverseWord += word[word.length - 1 - index]
  
}
 console.log(reverseWord);

//  Exercicio 12

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];

let menorPalavra = array[0];

for (let index = 1; index < array.length; index+= 1) {
  if (array[index].length > maiorPalavra.length) {
  maiorPalavra = array[index]
  }
  
}

for (let index = 1; index < array.length; index+=1) {
  if (array[index].length < menorPalavra.length) {
    menorPalavra = array[index]
  }
  
}

console.log(maiorPalavra);
console.log(menorPalavra);


// Exercicio 13 não entendi

let biggestPrimeNumber = 0;

for (let currentNumber = 50; currentNumber >= 2; currentNumber -= 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
    break; 
  }
}

console.log(biggestPrimeNumber);