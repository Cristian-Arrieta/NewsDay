import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import newsIcon from './img/newsIcon.png'
import './style/Navbar.css';

const Navbar = () =>{


    const [text,setStext] = useState(' ')
    const [scrolled,setScrolled]= useState(false);

    //These functions allow that when the user scrolls, the logo of our site is added to the navbar

    const handleScroll=() => {
      const offset=window.scrollY;
      if(offset > 80 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }

    useEffect (() => {
      window.addEventListener('scroll',handleScroll)
    })

    function Icon(){
      if(scrolled){
        return (
          <Link to="/" className="navbar-brand ml-3" > 
            <img src={newsIcon} alt="Icono" className="Ic"/>             
          </Link> 
        )
      }
    }
  
    let x=['navbar navbar-expand-lg navbar-dark bg-dark shadow'];
    if(scrolled){
      x.push('fixed-top');
    }
    

    //handleSubmit will redirect us to the "search" view with the parameter to search
    const handleSubmit = (event)=>{
      window.location.href=`/search/${text}`
      event.preventDefault();
    }

    //handleChange modifies the value of the constant "text" according to the input value 
    const handleChange = (e) =>
    {
      setStext(e.target.value);
      console.log(e.target.value);
    }


    return (
        <nav className={x.join(" ")}>
            <div className="container-fluid">            
                {Icon()}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link link-light" aria-current="page" to="/category/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link-light " aria-current="page" to="/category/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link-light " aria-current="page" to="/category/general">General</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link-light " aria-current="page" to="/category/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link-light " aria-current="page" to="/category/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link-light " aria-current="page" to="/category/sport">Sport</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link link-light" aria-current="page" to="/category/technology">Technology</Link>
                        </li>
                    </ul>
                    <form className="d-flex" onSubmit={handleSubmit}>
                        <input className="form-control me-2" value={text} pattern="[A-Za-z0-9 ]{2,15}" onChange={handleChange} type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>    
    )
}
export default Navbar;