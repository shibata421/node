const axios = require('axios')

const getRacas = async () => {
  try {
    return await axios.get('https://dog.ceo/api/breeds/list/all')
  } catch (error) {
    console.error(error)
  }
}

const countRacas = async () => {
  const breeds = await getRacas()

  if (breeds.data.message) {
    console.log(`Temos ${Object.entries(breeds.data.message).length} raças`)
  }
}

countRacas()