fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));

const displayCountries = countries => {
    const divCountries = document.getElementById('countries')
    // console.log(countries);
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const divCountry = document.createElement('div');
        divCountry.className = 'country';
        // const h3 = document.createElement('h3');
        // divCountry.append(h3);
        // h3.innerText = country.name;
        // const p = document.createElement('p');
        // p.innerText = country.capital;  
        // divCountry.appendChild(p);

        const countryInfo = `
        <h3 class="country-name">${country.name}</h3>
        <p class="capital">${country.capital}</p>
    `
        divCountry.innerHTML = countryInfo;
        divCountries.appendChild(divCountry);

    }
}