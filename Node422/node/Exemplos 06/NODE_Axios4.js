const axios = require('axios')

const consultar = async () => {
	axios
		.get('http://localhost:3000/ler')
		.then(response => console.log(response.data));
}

consultar()