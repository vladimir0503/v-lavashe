import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../common/images/logo.png';
import cart from '../../common/images/cart.png'
import NavBar from './NavBar/NavBar';

import './Header.scss';

const Header = () => {

    const { sum } = useSelector(state => state.cart)

    return (
        <>
            <header className='Header--wrapper'>
                <div className='Header--contentBlock'>
                    <img className='Header--logo' src={logo} alt='logo' />
                    <div className='Header--delivery'>
                        <p>Доставка по Москве</p>
                        <p>Пн-Вс с 9:00 до 21:00</p>
                    </div>
                    <div className='Header--phone'>
                        <a href="tel:+74951112233">+7 (495) 111-22-33</a><br></br>
                        <a href="tel:+79683332211">+7 (968) 333-22-11</a>
                    </div>
                    <Link to="/cart" activeClassName='active'>
                        <button>
                            <img src={cart} alt='cart' />
                            <p>{sum} р.</p>
                        </button>
                    </Link>
                </div>
                <NavBar />
            </header>
        </>
    );
};

export default Header;