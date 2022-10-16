/*HBS 
npm install --save-dev parcel-transformer-hbs

====== add to parcel:
 "transformers": {
    "*.hbs": [
        "parcel-transformer-hbs"
      ]
    }
===== import markup from './templates/markup.hbs';
*/

//npm i notiflix
//npm i --save lodash.debounce
//const debounce = require('lodash.debounce');


import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

import { fetchCountries } from "./js/fetchCountries";
import { renderCountriesListMarkup, renderFullInfoMarkup } from "./js/markupFunctions";
const DEBOUNCE_DELAY = 300;

const searchForm = document.querySelector('input#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

//const name = document.querySelector('input#search-box').value.trim();


searchForm.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch (event) {
    event.preventDefault();

    const name = document.querySelector('input#search-box').value.trim();

    fetchCountries(name).then( countries => {
        //console.log("Number of matches by request : ", countries.length);
        let markup = '';

        if (countries.length > 10) {
          countryList.innerHTML = '';
          countryInfo.innerHTML = '';
          Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');

        } else if (countries.length >= 2 && countries.length <= 10) {
            countryList.innerHTML = '';
            countryInfo.innerHTML = '';

            markup = renderCountriesListMarkup(countries);
            countryList.innerHTML = markup;  
            //console.log(markup);

          }  else if (countries.length === 1) {
            countryList.innerHTML = '';
            countryInfo.innerHTML = '';

            markup = renderFullInfoMarkup(countries);
            countryInfo.innerHTML = markup;
            //console.log(markup);
            }
    })
}