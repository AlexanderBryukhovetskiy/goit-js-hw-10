//`https://restcountries.com/v3.1/${name}?fields=capital,population,flags,languages`

//import {countryList, countryInfo} from "./refs";

//import { emptyMarkup } from "./markupFunctions";  //  рендер пустої розмітки
import Notiflix from "notiflix";

const URL = 'https://restcountries.com/v3.1/name';

export function fetchCountries(name){

    return fetch(`${URL}/${name}?fields=name,capital,population,flags,languages`)
        .then(response => {

            if (!response.ok || response.status === 404) {
                
                throw new Error('No matches found. Please enter correct name.');
            }
            return response.json();
        })
        .catch(error => {

            Notiflix.Notify.warning(error);

            //();//рендерить пусту розмітку
           // console.log(error);
    })
}