import React, { useState } from 'react'
import './style/CountryBar.css'
import Cookies from 'universal-cookie'


const CountryBar = () =>{

     // We use cookies to store the 2-letter ISO 3166-1 code of the country for which you want to get "headlines" 
     
    const cookies = new Cookies();
    const [state,setState] = useState(cookies.get('Country'));

    const countries = [
        {
          value: 'ar',
          name: 'Argentina'
        },
        {
          value: 'au',
          name: 'Australia'
        },
        {
          value: 'at',
          name: 'Austria'
        },
        {
          value: 'be',
          name: 'Belgium'
        },
        {
          value: 'br',
          name: 'Brazil'
        },
        {
           value: 'bg',
           name: 'Bulgaria'
        },
        {
          value: 'ca',
          name: 'Canada'
        },
        {
          value: 'cn',
          name: 'China'
        },
        {
          value: 'co',
          name: 'Colombia'
        },
        {
          value: 'cu',
          name: 'Cuba'
        },
        {
          value: 'cz',
          name: 'Czech Republic'
        },
        {
          value: 'eg',
          name: 'Egypt'
        },
        {
          value: 'fr',
          name: 'France'
        },
        {
          value: 'de',
          name: 'Germany'
        },
        {
          value: 'gr',
          name: 'Greece'
        },
        {
          value: 'hk',
          name: 'Hong Kong'
        },
        {
          value: 'hu',
          name: 'Hungary'
        },
        {
          value: 'in',
          name: 'India'
        },
        {
          value: 'id',
          name: 'Indonesia'
        },
        {
           value: 'ie',
           name: 'Ireland'
        },
        {
          value: 'il',
          name: 'Israel'
        },
        {
          value: 'it',
          name: 'Italy'
        },
        {
          value: 'jp',
          name: 'Japan'
        },
        {
          value: 'lv',
          name: 'Latvia'
        },
        {
          value: 'lt',
          name: 'Lithuania'
        },
        {
          value: 'my',
          name: 'Malaysia'
        },
        {
          value: 'mx',
          name: 'Mexico'
        },
        {
          value: 'ma',
          name: 'Morocco'
        },
        {
          value: 'nl',
          name: 'Netherlands'
        },
        {
          value: 'nz',
          name: 'New Zealand'
        },
        {
          value: 'ng',
          name: 'Nigeria'
        },
        {
          value: 'no',
          name: 'Norway'
        },
        {
          value: 'ph',
          name: 'Philippines'
        },
        {
          value: 'pl',
          name: 'Poland'
        },
        {
          value: 'pt',
          name: 'Portugal'
        },
        {
          value: 'ro',
          name: 'Romania'
        },
        {
          value: 'ru',
          name: 'Russia'
        },
        {
           value: 'sa',
           name: 'Saudi Arabia'
        },
        {
          value: 'rs',
          name: 'Singapore'
        },
        {
          value: 'sk',
          name: 'Slovakia'
        },
        {
          value: 'si',
          name: 'Slovenia'
        },
        {
          value: 'za',
          name: 'South Africa'
        },
        {
          value: 'kr',
          name: 'South Korea'
        },
        {
          value: 'se',
          name: 'Sweden'
        },
        {
          value: 'ch',
          name: 'Switzerland'
        },
        {
          value: 'tw',
          name: 'Taiwan'
        },
        {
          value: 'th',
          name: 'Thailand'
        },
        {
          value: 'tr',
          name: 'Turkey'
        },
        {
          value: 'ae',
          name: 'UAE'
        },
        {
          value: 'ua',
          name: 'Ukraine'
        },
        {
          value: 'gb',
          name: 'U. Kingdom'
        },
        {
          value: 'us',
          name: 'USA'
        },
        {
          value: 've',
          name: 'Venezuela'
        },
         
      ];


      function handleChange(event){
        setState( event.target.value);
                
        cookies.set('Country',event.target.value,{path:'/'});
        window.location.href='/'

      }

    return(

            <div className="CountryB">        
                <div className="countryS ">
                    <img className="img-fluid iconCountry mx-2"  alt="Country" src={process.env.PUBLIC_URL + '/Countries/'+state+'.svg'} />
                    <select className="form-select form-select-sm "  onChange={handleChange} defaultValue={cookies.get('Country')}>
                        
                        {countries.map(country =>
                                <option  key={country.value} value={country.value}>{country.name}</option>
                            )}
                    </select>
                </div>
                
            </div>

        )
}

export default CountryBar;