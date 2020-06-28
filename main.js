//------------------- Selectores --------------------------

const $characters = document.querySelector('.characters')
const URL_API = 'https://rickandmortyapi.com/api/character/'


//------------------- Get Data function -------------------

const getData = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

//------------------ HTML template --------------------------




getData(URL_API)
.then((data) => console.log(data.results)) 
