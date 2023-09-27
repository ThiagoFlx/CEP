async function get(cep) {
  const url = 'http://viacep.com.br/ws/' + cep + '/json/';

  const request = await fetch(url, {
    method: 'GET',
  })
  const json = await request.json()

  return json
}

async function preencherCep() {
  let cep = document.querySelector('#cep').value

  cep = cep.replace(/\D/g, '')
  console.log (cep)

  if (cep.length === 8) {
    const endereco = await get(cep)
    console.log(endereco)
    
    if (endereco) {
      document.querySelector('#rua').value = endereco.logradouro 
      document.querySelector('#bairro').value = endereco.bairro 
      document.querySelector('#cidade').value = endereco.localidade 
      document.querySelector('#uf').value = endereco.uf
      document.querySelector('#numero').focus()
    }
  }
}

async function validar() {
  const numero = document.querySelector('#numero').value

  if (numero.length <= 0) {
      document.getElementById("triangle").hidden=false
  }else{
      document.getElementById("triangle").hidden=true
  }
 
}