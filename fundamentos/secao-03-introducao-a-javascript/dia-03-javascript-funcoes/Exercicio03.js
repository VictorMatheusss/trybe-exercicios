let clientesTrybeBank = ['Ada', 'John', 'Gus'];


function validaString(cliente) {
if (typeof cliente !== 'string') {
  return 'O parâmetro dentro de cliente não é "string"'
}
else {
  return true;
}
}

function clienteIndex(cliente) {
  for (let index = 0; index < clientesTrybeBank.length; index+=1) {
    if (cliente === clientesTrybeBank[index]) {
      return index
    }
    else false;
  }
}

function removeCliente(cliente) {
  let valicacao = validaString(cliente)
  if (valicacao !== true) {
    return valicacao
  }
  let index = clienteIndex(cliente)
  if (index === false) {
    return 'Cliente não encontrado'
  }

  clientesTrybeBank.splice(index, 1)
  return 'Cliente excluido com sucesso'
}

removeCliente('Ada')
console.log(clientesTrybeBank);

let tre = 0;