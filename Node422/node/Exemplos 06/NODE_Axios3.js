const axios = require('axios')

const inserir = async () => {
	axios.post('http://localhost:3000/blah', {
	  Author: 'Netren',
	  Title : 'Dia Namorados',
	  Body  : 'Feliz Dia Dos Namorados'
	});
}

inserir()