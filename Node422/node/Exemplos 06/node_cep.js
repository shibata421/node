const axios = require('axios')

const consultar = async ()  => {
	axios.get('https://viacep.com.br/ws/01003000/json/')
	     .then(response => {console.log(response.data);});
}

consultar()