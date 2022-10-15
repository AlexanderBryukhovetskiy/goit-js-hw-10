//`https://restcountries.com/v3.1/${name}?fields=capital,population,flags,languages`

const URL = 'https://restcountries.com/v3.1/name';

export function fetchCountries(name){

    return fetch(`${URL}/${name}?fields=name,capital,population,flags,languages`)
        .then(response => {
            if (!response.ok || response.status === 404) {
                throw new Error()
            }
            return response.json();
        })
        .catch(error => {
            console.log(error);
    })
}