import { useEffect, useState } from "react"

const useFetch = url => {
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchResource = async () =>{
            try
            {
                let res = await fetch(url)
                let data = await res.json()
                setData(data)

                if(data.status === 'error')
                {
                    setError(data);
                }
                
                setLoading(false)
            }
            catch(error)
            {
                setLoading(false)
                setError(error)
            }
        }
        fetchResource()
    },[url])
    return {data, loading, error}
}
export default useFetch