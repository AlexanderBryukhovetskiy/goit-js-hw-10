//`https://restcountries.com/v3.1/${name}?fields=capital,population,flags,languages`

const URL = 'https://restcountries.com/v3.1/name';

export function fetchCountries(name){

    return fetch(`${URL}/${name}?fields=name,capital,population,flags,languages`)
        .then(response => {
            if (!response.ok) {
                throw new Error()
            }
            if (response.status === 404){
                Notiflix.Notify.warning('No matches found. Please enter correct name.');
                throw new Error();
            }
            
            return response.json();
        })
        .catch(error => {
           
            console.log(error);
    })
}