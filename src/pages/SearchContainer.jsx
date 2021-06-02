import React from 'react'
import { useParams } from 'react-router'

//Hook
import useFetch from '../hooks/useFetch'

//API
import url from '../config'

//Pages
import FatalError from './FatalError'
import Search from './Search'

import Loading from '../components/Loading'


const SearchContainer = () =>{

    const {text} = useParams();

    /*We get the data from the API.
    We use the endpoint "everything" to obtain a greater search*/

    const {data, loading, error} = useFetch(`${url}/everything?language=es&q=${text}&pageSize=10&apiKey=fa1de4892d8042278128a4ba64f60d83`)


    if(loading)
        return <Loading/>
    if(error)
        return <FatalError/>
    //console.log(data);
    return <Search
            news={data}
            text={text}/>

}



export default SearchContainer