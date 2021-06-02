import React from 'react'
import Card from './Card'
import MainCard from './MainCard'

const NewsList = ({news}) =>(
    
    <div className="container">
        <div className="row">
            {
                news ? (
                    news.map((n,index)=>{ 
                        if(index === 0 || index === 1 )
                            return (
                                <div className="col-md-6" key={index}>
                                    <a href={n.url} className="btn">
                                        <MainCard
                                            {... n}
                                        />
                                    </a> 
                                </div>
                            )
                       
                            return(
                                <div className="col-md-4" key={index}>
                                    <a href={n.url} className="btn">
                                        <Card                                            
                                            {... n}
                                        />
                                    </a>
                                </div>
                            )
                    })
                ):(                    
                    <span/>
                )
               
            }
        </div>
    </div>

)

export default NewsList