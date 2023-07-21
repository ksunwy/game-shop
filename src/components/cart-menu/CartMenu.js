import React from 'react';

import { calcTotalPrice } from '../utils';

import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';

import './cart-menu.css';

const CartMenu = ({ items, onClick }) => {
    return (
        <div className='cart-menu'>

            <div className='cart-menu__games-list'>
                {
                    items.length > 0 ? items.map(game => <CartItem key={game.title} price={game.price} id={game.id} title={game.title} />) : 'Корзина пуста'
                }
            </div>
            {
                items.length > 0 ?
                    <div className='cart-menu__arrange'>
                        <div className='cart-total-price'>
                            <span> Итого: </span>
                            <span> {calcTotalPrice(items)} руб. </span>
                        </div> <br />
                        <Button type='primary' size='m' onClick={onClick}>
                            Оформить заказ
                        </Button>
                    </div>
                    : null
            }
        </div>
    )
}

export default CartMenu;