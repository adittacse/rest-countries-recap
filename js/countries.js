const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = (countries) => {
    const countriesHTML = countries.map(country => getCountryHTML(country));
    const container = document.getElementById("countries");
    container.innerHTML = countriesHTML.join(" ");
}

// option 1
// const getCountryHTML = (country) => {
//     return `
//         <div class="country">
//             <h2>${country.name.common}</h2>
//             <img src="${country.flags.png}" alt="country flag">
//         </div>
//     `;
// }

// option 2 : destructure
// const getCountryHTML = (country) => {
//     const {name, flags} = country;
//     return `
//         <div class="country">
//             <h2>${name.common}</h2>
//             <img src="${flags.png}" alt="country flag">
//         </div>
//     `;
// }

// option 3
const getCountryHTML = ({name, flags, area, region}) => {
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <p>Area: ${area}</p>
            <p>Continent: ${region}</p>
            <img src="${flags.png}" alt="country flag">
        </div>
    `;
}

loadCountries();