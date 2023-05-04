// Exercicio 01

let num1 = 7;
let num2 = 22;
let num3 = 5


console.log('Soma: ' + (num1 + num2));
console.log('subtracao: ' + (num1 - num2));
console.log('multiplicacao ' + (num1 * num2));
console.log('divisao ' + (num1 / num2));
console.log('modulo: ' + (num1 % num2));


// Exercicio 02



if (num1 > num2) {
  console.log("'num1' é maior que 'num2'");
}
else { 
  console.log("'num2' é maior que 'num1'");
}


// Exercicio 03

if (num1 > num2 && num1 > num3) {
  console.log("O maio número é: " + num1 + ' (num1)');
}

else if (num2 > num1 && num2 > num3) {
  console.log("O maior número é: " + num2 + ' (num2)');
}

else{
  console.log("O maior número é: " + num3 + ' (num3)');
}


// Exercicio 04




if (num1 > 0) {
  console.log("positive");
}

else if (num1 <= 0) {
  console.log("negative");
}

else {
  console.log("zero");
}



//   Exercicio 05



let angulo1 = 70;
let angulo2 = 49;
let angulo3 = 61;


if (angulo1 + angulo2 +angulo3 === 180) {
  console.log(true);
}

else {
  console.log(false);
}



// Exercicio 06


let xadrez = 'cavalo'


switch (xadrez.toLowerCase) {

  case cavalo:
  console.log("Movimentos: 3 na vertical e 2 no horizontal");
    break;

  case rei:
  console.log("Movimentos: para todas as direções, uma casa por lance");
  break;

  case bispo:
    console.log("Movimentos: pode se mover por qualquer número de casas, mas somente nas diagonais");
    break;

  default: "erro"
   
}


// Exercicio 07


let porcentagem = 93

if (porcentagem >= 90 ) {
  console.log("A");
}

else if (porcentagem >= 80 && porcentagem <90) {
  console.log("B");
}

else if (porcentagem >= 70 && porcentagem <80) {
  console.log("C");
}

else if (porcentagem >= 60 && porcentagem <70) {
  console.log("D");
}

else if (porcentagem >= 50 && porcentagem <60) {
  console.log("E");
}

else if (porcentagem <50 ) {
  console.log("F");
}

else {
  console.log("erro");
}



// Exercicio 08



if (num1 || num2 || angulo3 ) {
  
}