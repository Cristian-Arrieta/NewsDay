import React from 'react'
import './style/Footer.css'
import '../fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () =>(

    <div className=" footer bg-dark">
        <div className="row">
            <div className="col mb-5 mb-lg-0 pb-4">
                <h4 className="text-uppercase mb-4">Around the Web</h4>
                <a className="btn btn-outline-light btn-social mx-2" href="https://www.linkedin.com/in/cristian-arrieta-b979471a6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJi8W5avTTX2bSAcXTZbEqA%3D%3D">
                    <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
                </a>
                <a className="btn btn-outline-light btn-social mx-2" href="https://github.com/Cristian-Arrieta">
                    <FontAwesomeIcon icon={["fab", "github"]}  size="2x"/>
                </a>
            </div>
        </div>
        <div className="copyright py-4 text-center text-white mt-3">
            <small>Copyright © Cristian-Arrieta 2021</small>
        </div>
    </div>

)

export default Footer;

