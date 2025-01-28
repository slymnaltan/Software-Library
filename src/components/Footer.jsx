import React from 'react'
import { Link } from 'react-router-dom'
import "../style/home.css"

import yellowlogo from '../image/yellowlogo.jpeg';
import linkedin from '../image/linkedin.png';
import instagram from '../image/instagram.png';
import github from '../image/github.png';

function Footer() {
    return (
        <div>
            <footer>
                <div className='home-first'>
                    We help you choose the right path. <br />
                    Our platform is designed to inspire and empower <br />
                    individuals to achieve their goals in the tech industry. <br />
                    <img style={{width:'80px', borderRadius:'30%',paddingTop:'17px'}} src={yellowlogo} alt="" />
                </div>
                <div className='home-second'>
                    <h3>Follow or Contact with us:</h3>
                    <ul>
                        <Link className='link' to="https://www.linkedin.com">
                            <img src={linkedin} alt="LinkedIn" />
                        </Link>
                        <Link className='link' to="https://www.instagram.com">
                            <img src={instagram} alt="Instagram" />
                        </Link>
                        <Link className='link' to="https://www.github.com">
                            <img src={github} alt="Github" />
                        </Link>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer