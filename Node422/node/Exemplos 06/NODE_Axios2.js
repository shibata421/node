const axios = require('axios')

const getRacas = () => {
  try {
    return axios.get('https://dog.ceo/api/breeds/list/all')
  } catch (error) {
    console.error(error)
  }
}

const counteRacas = async () => {
  const racas = getRacas()
    .then(response => {
      if (response.data.message) {
        console.log(
          `Temos ${Object.entries(response.data.message).length} raças`
        )
      }
    })
    .catch(error => {
      console.log(error)
    })
}

counteRacas()