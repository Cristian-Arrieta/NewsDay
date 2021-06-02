import React from 'react'
import Image_null from './img/Image_not_2.png'

const SearchList = ({news,text}) =>
(   
    <div className="container mt-3">
        <div>
            <h3>Search result : "{text}" </h3>
        </div>

       { 
        news ? (
            news.map((n,index)=>{
                return(
                    <a href={n.url} className="btn">
                        <div className="card text-uppercase text-dark mb-3 bg-white shadow mt-4 p-2" key={index}>
                            
                            <h4 className="card-title pt-1">{n.title}</h4>
                            
                            <div className="card-body row">
                                <div className="col">
                                    {
                                        n.urlToImage?(
                                            <img  className=" img-fluid rounded img-news" src={n.urlToImage} alt="ImgNews"/>
                                        ):
                                        (
                                            <img  className=" img-fluid rounded img-news" src={Image_null} alt="ImgNews"/>
                                        )
                                    }
                                </div>
                                <div className="col">
                                    <p>{n.description}</p>
                                </div>
                            </div>
                            <div className="row minTxt card-subtitle mt-3">
                                <p className="col">Author: {Date(n.author)}</p>
                                <p className="col">{n.publishedAt}</p>
                            </div>
                        </div>
                    </a>
                )})
        ):(
            <span>0 Results ...</span>
       )}
    
        
    </div>
)

export default SearchList;