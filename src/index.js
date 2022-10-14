//HBS 
// npm install --save-dev parcel-transformer-hbs

// add to parcel:
//  "transformers": {
//     "*.hbs": [
//         "parcel-transformer-hbs"
//       ]
//     }

//npm i notiflix
//npm i --save lodash.debounce

//import markup from './templates/markup.hbs';
//const debounce = require('lodash.debounce');



import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

import { fetchCountries } from "./js/fetchCountries";

const DEBOUNCE_DELAY = 300;

const searchForm = document.querySelector('input#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

searchForm.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch (event) {
    event.preventDefault();

    const name = document.querySelector('input#search-box').value.trim();

    fetchCountries(name).then( countries => {
        console.log(countries.length);
        let markup = '';

        if (countries.length > 10) {
            countryList.innerHTML = '';
            countryInfo.innerHTML = '';
            Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        } else if (countries.length >= 2 && countries.length <= 10) {
            //console.log(countries);

            countryInfo.innerHTML = '';
            markup = renderCountriesListMarkup(countries);
            countryList.innerHTML = markup;  

            //console.log(markup);

         }  else if (countries.length === 1) {
            countryList.innerHTML = '';

            markup = renderFullInfoMarkup(countries);
            console.log(markup);

            countryInfo.innerHTML = markup;  }

    })
}

function renderCountriesListMarkup (countries) {
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

function renderFullInfoMarkup (countries) {
    let country = countries[0];
    
    console.log('it is country inside renderFullInfoMarkup(): ', country);

    const singleMarkup =  ({name, capital, flags, population, languages} = country) => {

        //console.log({name, capital, flags, population, languages})

        //  ===== ЯК ВИТЯГТИ УСІ МОВИ? ======
        const allLanguages = languages.map(lang => lang.value).join(', ');
        
        const fullCountryInfoMarkup = 
        `<div class="country-card">
            <img class="country-flag" src="${flags.svg}" alt="${name.official}" width="50"/>
            <h2 class="country-name">${name.official}</h2>
            
            <ul class="list additional-info">
                <li class="info-item">Capital: ${capital}</li>
                <li class="info-item">Population: ${population}</li>
                <li class="info-item">Languages: ${allLanguages}}</li>
            </ul>
        </div>`;

    console.log('fullCountryInfoMarkup : ', fullCountryInfoMarkup);
    return fullCountryInfoMarkup;
    }

    return singleMarkup();
}



//написать функцию для 1 страны

//добавить стили для разметки