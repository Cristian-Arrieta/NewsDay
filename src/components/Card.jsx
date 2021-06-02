import React from 'react'
import './style/Card.css'
import Image_null from './img/Image_not_2.png'

const Card = ({title, urlToImage, author,content,description,publishedAt}) => (

    <div className="text-uppercase text-dark mb-3 secondary_Card bg-white shadow mt-4 p-2" title={content}>
        <div className="secondary_image">
            {
                urlToImage?(
                    <img  className=" img-fluid rounded img-news" src={urlToImage} alt="ImgNews"/>
                ):
                (
                    <img  className=" img-fluid rounded img-news" src={Image_null} alt="ImgNews"/>
                )
            }
            

        </div>        

        <h5 className="my-3">{title}</h5>          

        <p>{description}</p>

        <div className="row minTxt">
            <p className="col">Author: {author}</p>
            <p className="col">{publishedAt}</p>
        </div>


    </div>

)

export default Card