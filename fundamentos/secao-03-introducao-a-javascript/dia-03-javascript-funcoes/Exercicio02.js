let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// function adicionaCliente(cliente) {
//   if (typeof cliente === 'string') {
//     clientesTrybeBank.push(cliente)
//     return 'Cliente adicionado com sucesso!'
//   }
//   else {
//     'O cliente precisa estar dentro de uma "string"'
//   }
// }

// adicionaCliente('Vinicius')
// console.log(clientesTrybeBank);


// Exercicio 02

function removeCliente(cliente) {
  if (typeof cliente === 'string') {
    let clienteEncontrado = false;
    for (let index = 0; index < clientesTrybeBank.length; index+=1) {
      if (cliente === clientesTrybeBank[index]) {
        clientesTrybeBank.splice(index, 1)
        clienteEncontrado = true;
        return 'Cliente removido com sucesso'
      }
      
    }

    if (clienteEncontrado === false) {
      return 'Cliente não encontrado'
    }
    else {
      return 'Cliente precisa estar dentro de um parâmetro "string"'
    }
  }
}

removeCliente('Ada')
console.log(clientesTrybeBank);