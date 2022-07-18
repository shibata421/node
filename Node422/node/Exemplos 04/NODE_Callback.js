/*  
- Objetivos - 
0 - Obter usuario.
1 - Obter o numero de telefone de um usuário a partir do seu id
2 - Obter o endereço de um usuário a partir do seu id
*/

function obterUsuario(callback) {
    setTimeout( function () {
		console.log('obterUsuario');
        return callback(null, {
        id: 1,
        nome: 'Aladin',
        dataNascimento: new Date()
        })
    },1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout( function () {
		console.log('obterTelefone');		
        return callback(null, {
            telefone: '001-900-5061',
            ddd: 11
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
		console.log('obterEndereço');
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    },2000)
}

function resolverUsuario(erro, usuario) {
    console.log('usuario: ',usuario)
}

obterUsuario(function resolverUsuario(error, usuario) {
    if(error){
        console.error('Deu ruim no usuario', error)
        return;
    }

    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if(error1){
            console.error('Deu ruim no telefone', error1)
            return;
        }

        obterEndereco(usuario.id, function resolverEndereco(erro2, endereco) {
             if (erro2) {
                 console.error('Deu ruim no endereco', error2)
                return;
            }

            console.log(`
                Nome: ${usuario.nome}
                Endereco: ${endereco.rua}, ${endereco.numero}
                Telefone: (${telefone.ddd}) ${telefone.telefone}
            `)
        })
    })
})