import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCardItem } from '../../redux/cardReduser';

import './Item.scss';

const Item = ({ imageUrl, name, price, promo }) => {

    const { items } = useSelector(state => state.cart);
    const itemCount = items.flat().filter(item => item.name === name).length;

    const dispatch = useDispatch();

    const addItem = () => {
        const newItem = {
            imageUrl,
            name,
            price,
            promo,
            id: Math.random().toString(36).substr(2, 9)
        }
        dispatch(addCardItem(newItem));
    };

    return (
        <div className='Item--wrapper'>
            <img src={imageUrl} alt='item-img' />
            <p className='Item--name'>{name}</p>
            <div className='Item--button_block'>
                <p>{price} р.</p>
                <button onClick={addItem}>
                    {itemCount
                        ? <span>{`в корзине ${itemCount}`}</span>
                        : 'в корзину'
                    }
                </button>
            </div>
        </div>
    );
};

export default Item;