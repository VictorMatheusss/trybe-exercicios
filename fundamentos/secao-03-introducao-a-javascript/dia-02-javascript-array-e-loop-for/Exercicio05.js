let fruits = [3,4,10,1,12]

// let soma = fruits[0] + fruits[1] + fruits[2] +fruits[3] + fruits[4]


// if (soma >15) {
//   console.log(soma);
// }

// else {
//   console.log('Valor menor que 16');
// }

let soma = 0;

for (let index = 0; index < fruits.length; index+= 1) {
  soma += fruits[index]
  
}

if (soma >15) {
  console.log(soma);
}

else {
  console.log('Valor menor que 16');
}