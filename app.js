fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));

const displayCountries = countries => {
    const divCountries = document.getElementById('countries');

    //forEach use 
    countries.forEach(country => {
        const divCountry = document.createElement('div');
        divCountry.className = 'country';
        const countryInfo = `
        <h3 class="country-name">${country.name}</h3>
        <p class="capital">${country.capital}</p>
        <button onclick="displayCountryDetails('${country.name}')">Details</button>
    `;
        divCountry.innerHTML = countryInfo;
        divCountries.appendChild(divCountry);
    });
}
const displayCountryDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderCountryInfo(data[0]))
}
const renderCountryInfo = country => {
        // console.log(country);
        const countryDetails = document.getElementById('country-Detail');
        countryDetails.innerHTML = `
        <h1>${country.name}</h1>
        <p>population: ${country.population}</p>
        <p>Area : ${country.area}</p>
        <img src="${country.flag}">
    `
    }
    // console.log(countries);
    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const divCountry = document.createElement('div');
    //     divCountry.className = 'country';

//     // const h3 = document.createElement('h3');
//     // divCountry.append(h3);
//     // h3.innerText = country.name;
//     // const p = document.createElement('p');
//     // p.innerText = country.capital;  
//     // divCountry.appendChild(p);

//     const countryInfo = `
//     <h3 class="country-name">${country.name}</h3>
//     <p class="capital">${country.capital}</p>
// `;
// divCountry.innerHTML = countryInfo;
// divCountries.appendChild(divCountry);

// }
// }