export function renderCountriesListMarkup (countries) {
    //console.log('it is countries inside renderCountriesListMarkup(): ', countries);
    const shortMarkup = countries.reduce((acc, {name, flags} = country) => 
    acc + `<ul class="list temp-list">
                <li>
                    <img class="temp-list--flag" src="${flags.svg}" alt="${name.official}" width="50"/>
                    <h2 class="temp-list--name">${name.official}</h2>
                </li>
            </ul>`, "");
    return shortMarkup;
}

export function renderFullInfoMarkup (countries) {
    const singleMarkup = ({name, capital, flags, population, languages} = countries[0]) => {
        // console.log('name : ', name); console.log('capital : ', capital);
        // console.log('flags : ', flags); 
        // console.log('population : ', population);
        // console.log('languages : ', languages);

        //  ===== розпаковуємо усі мови з об'єкта languages: ======
        // цей вираз відразу додано в розмітку нижче
        // const allLanguages = Object.values(languages).join(', '); 
        // console.log("Languages in this country: ", allLanguages);
        
        const fullCountryInfoMarkup = 
        `<div class="country-card">
            <img class="country-flag" src="${flags.svg}" alt="${name.official}" width="50"/>
            <h2 class="country-name">${name.official}</h2>
            
            <ul class="list additional-info">
                <li class="info-item">Capital: ${capital}</li>
                <li class="info-item">Population: ${population}</li>
                <li class="info-item">Languages: ${Object.values(languages).join(', ')}</li>
            </ul>
        </div>`;
        //console.log('fullCountryInfoMarkup : ', fullCountryInfoMarkup);
        
        return fullCountryInfoMarkup;
    }

    return singleMarkup();
}

