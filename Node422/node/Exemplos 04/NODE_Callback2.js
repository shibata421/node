/*  
- Objetivos - 
0 - Obter usuario.
1 - Obter o numero de telefone de um usuário a partir do seu id
2 - Obter o endereço de um usuário a partir do seu id
*/

function obterUsuario(callback) {
    setTimeout( function () {
		
        return callback(null, {
        id: 1,
        nome: 'Aladin',
        dataNascimento: new Date()
        })
    },1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout( function () {
		
        return callback(null, {
            telefone: '001-900-5061',
            ddd: 11
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {

        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    },2000)
}

console.log('Disparou obter usuario.');
obterUsuario(function resolverUsuario(error, usuario) {
	console.log('Disparou obter telefone.');
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
		console.log('Disparou obter endereço.');
        obterEndereco(usuario.id, function resolverEndereco(erro2, endereco) {
            console.log(`
                Nome: ${usuario.nome}
                Endereco: ${endereco.rua}, ${endereco.numero}
                Telefone: (${telefone.ddd}) ${telefone.telefone}
            `)
			console.log('Endereco terminou');
        })
    	console.log('Telefone terminou');
    })
	console.log('Usuario terminou');
})