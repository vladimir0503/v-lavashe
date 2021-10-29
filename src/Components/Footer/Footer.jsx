import React from 'react';
import logo from '../../common/images/logo.png';

import './Footer.scss';

const Footer = () => {
    return (
        <footer className='Footer--wrapper'>
            <div className='Footer--content'>
                <img src={logo} alt='logo' />
                <a
                    className='Footer--mail'
                    href="mailto:info@vlavashe.ru"
                >
                    info@vlavashe.ru
                </a>
                <div className='Footer--phone'>
                    <a href="tel:+74951112233">+7 (495) 111-22-33</a><br></br>
                    <a href="tel:+79683332211">+7 (968) 333-22-11</a>
                </div>
            </div>
            <div className='Footer--copyright'>
                <p>&copy; 2021</p>
            </div>
        </footer>
    );
};

export default Footer;