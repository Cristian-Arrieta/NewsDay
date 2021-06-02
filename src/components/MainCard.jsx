import React from 'react'
import './style/MainCard.css'
import Image_null from './img/Image_not_2.png'

const MainCard = ({title, urlToImage, author,content,description,publishedAt}) =>(

    <div className="card text-uppercase text-white bg-dark main_Card  p-2 m-2" title={title}>
        <div className="main_image">
            {//Some news may have the "urlToImage" attribute set to null in these cases we assign the image "Image_null" by default 
                urlToImage?(
                    <img  className=" img-fluid rounded img-main-news" src={urlToImage} alt="ImgNews"/>
                ):
                (
                    <img  className=" img-fluid rounded img-main-news" src={Image_null} alt="ImgNews"/>
                )
            }
        </div>    

        <h5 className="my-3">{title}</h5>          

        <p>{description}</p>

        <div className="row minTxt ">
            <p className="col">Author: {author}</p>
            <p className="col">{publishedAt}</p>
        </div>
        
        
    </div>

)

export default MainCard