import React from 'react';
import saturn from '../../media/saturn.svg'
import './shared.css'

const Header = (props) => {
    return (
        <div className='header'>
            <div>
                <div>
                    <img src={saturn}/>   
                </div>
                <div>
                    <h1>
                        Saturn's List
                    </h1>
                </div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Profile</li>
                        <li>Account</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header