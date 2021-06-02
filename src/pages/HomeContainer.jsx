import React from 'react'
import useFetch from '../hooks/useFetch'
import url from '../config'
import Loading from '../components/Loading'
import FatalError from './FatalError'
import Home from './Home'
import Cookies from 'universal-cookie'

const HomeContainer = () =>{

    /*We search the value of "country" that we store in some Cookies (in CountryBar.jsx)*/
    const cookies = new Cookies();
    const country = cookies.get('Country')

    if(!country)
    {
        //If it does not exist by default it is "AR"      
        cookies.set('Country','ar',{path:'/'});
    }
    
    /*We get the data from the API.*/
    const {data, loading, error} = useFetch(`${url}/top-headlines?country=${country}&apiKey=fa1de4892d8042278128a4ba64f60d83`)

    if(loading)
        return <Loading/>
    if(error)
    {
        console.log(error)
        return <FatalError
            error={error}
        />
    }
        
    //console.log(data);
    return <Home
            news={data}/>
}

export default HomeContainer





