import React from 'react'
import { useParams } from 'react-router-dom'
import Cookies from 'universal-cookie'

//API
import url from '../config'

//Hook
import useFetch from '../hooks/useFetch'

//Pages
import FatalError from './FatalError'
import Category from './Category'

import Loading from '../components/Loading'

const CategoryContainer = () =>
{
    /*We search the value of "country" that we store in some Cookies (in CountryBar.jsx)*/
    const cookies = new Cookies();
    const country = cookies.get('Country')

    //"category" Parameter that we will use to filter   
    const {categ} = useParams();
    
    /*We get the data from the API.*/
    const {data, loading, error} = useFetch(`${url}/top-headlines?country=${country}&category=${categ}&apiKey=fa1de4892d8042278128a4ba64f60d83`)

    if(loading)
        return <Loading/>
    if(error)
        return <FatalError/>
    
    return <Category
            news = {data}
            title = {categ}/>

}
export default CategoryContainer