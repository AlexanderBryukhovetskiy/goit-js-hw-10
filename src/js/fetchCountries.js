
//https://restcountries.com/v2/{service}?fields={field},{field},{field}
//name.official - повна назва країни
// capital - столиця
// population - населення
// flags.svg - посилання на зображення прапора
// languages - масив мов

//`https://restcountries.com/v3.1/${name}?fields=capital,population,flags,languages`

const URL = 'https://restcountries.com/v3.1/name';

export function fetchCountries(name){

    return fetch(`${URL}/${name}?fields=name,capital,population,flags,languages`)
        .then(response => {
            if (!response.ok) {
                throw new Error()
            }
            return response.json();
        })
        .catch(error => 
            // добавить всплывающее сообщение /404?/
            console.log(error));
}