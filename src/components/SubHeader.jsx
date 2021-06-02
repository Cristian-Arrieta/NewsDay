import React from 'react'
import { Link } from 'react-router-dom';
import './style/SubHeader.css'
import newsIcon from './img/newsIcon.png';


const SubHeader = ({title}) =>   (

    <div className={"container bg-dark "+title}>
        <div className="subHeader">
            <Link to="/">
                <img className="Ic " src={newsIcon} alt="Icono"/>
            </Link>
            
            <h2 className="mx-2">{title}</h2>   

            <Link to="/">
                <img className="Ic " src={newsIcon} alt="Icono"/>
            </Link>
               
        </div>
    </div>
        

    )
    
export default SubHeader