const loadCountries = () => {

    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))


}
loadCountries()

const displayCountry = data => {

    const divContainer = document.getElementById('country')

    data.forEach(x => {



        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>name: ${x.name.common}</h3>
        <p>capital: ${x.capital ? x.capital[0] : 'no capital'
            }</p >
<button onClick="loadCountryDetail('${x.cca2}')"> Details</button>

    `
        divContainer.appendChild(countryDiv)
    }
    )
}

const loadCountryDetail = (code) => {

    const url = `https://restcountries.com/v3.1/alpha/${code}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}


const displayCountryDetail = country => {


    const countryDetail = document.getElementById('countryDetails')
    countryDetail.innerHTML = `
    <h2> Details : ${country.name.common}</h2>
    <img src="${country.flags.png}">
    
    `


}