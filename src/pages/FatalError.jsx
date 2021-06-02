import React from 'react'
import imgError from '../components/img/error.jpg'

//In construction ...
const FatalError = ({error}) =>(

    <div className="container">
        <div>
            <h1 className="alert alert-danger mt-2">
                {error.code}
            </h1>
            <h5 className="alert alert-warning mt-2">
                {error.message}
            </h5>
            <img src={imgError} alt="Error" className=" img-fluid rounded" />
        </div>
       
    </div>
)


export default FatalError 